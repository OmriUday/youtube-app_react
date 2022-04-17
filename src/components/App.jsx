import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTextInputSubmit("buildings");
  }

  // onTextInputSubmit -> פונקציה שתופעל כל פעם מהרנדר כאשר יהיה אירוע שיפעיל אותה

  onTextInputSubmit = async (textInput) => {
    const response = await youtube.get("/search", {
      params: {
        q: textInput,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      // div ui container - the all wrapper page in display
      <div className="ui container"> 
        {/* <SearchBar onFormSubmit={this.onTextInputSubmit} /> כאשר יהיה לחיצת אנטר יפעיל את הפונקציה של קריאת האייפיאיי */}
        <SearchBar onFormSubmit={this.onTextInputSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;