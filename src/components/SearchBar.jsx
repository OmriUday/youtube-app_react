import React from 'react';

class SearchBar extends React.Component {
  // state = { textInput: '' } -> זה המצב ההתחלתי שמוצג בדפדפן שפותחים אותו כלומר בלי טקסט בתיבה
  state = { textInput: '' };

  // onInputChange = event => { הפונקציה שתיקרא כל פעם שהשינוי שמוגדר ברנדר למטה יקרה ובעצם בשינוי יש קריאה לפונקציה הזאת שתבצע כל פעם את השינוי שצריך ברינדור החדש 
  //  event ----> זהו בעצם אובייקט , והוא האובייקט שינוי שבעצם שווה לערך החדש שקרה בשינוי שהמשתמש עשה בדפדפן ובמקרה הזה הוא יקבל את הערך של הטקסט שהמשתמש הכניס לתיבת הטקסט, והוא יועבר בעצם לחלק שבתוך הפונקציה שהיא בעצם תגדיר מחדש את הסטייס וככה הסטייס יידע מה האיפוט ערך החדש שלו בהתאם למה שהמתשמש הכניס בתיבת טקסט החדשה
  onInputChange = event => {
    // this.setState({ textInput: event.target.value }); -> כאן בעצם מגדירים סטייס מחדש , כאשר הטקסט החדש שהוא יכיר בו שנמצא בתיבת טקסט בהתאם למה שהמתשמש הכניס , יהיה האיוונט שהוא בעצם אובייקט השינוי שהתשתמש עשה בדפדפן הערך בתוכו אבל זה אובייקט וצריך להגיע לערך הזה ! , ואז נקודה כי זה אובייקט ואז הוא ניגש לטארגת שהוא בעצם עוד חלק באובייקט ואז לוואליו שזה בעצם נותן בדיוק את הערך מחרוזת שהמשתמש הקליד ואז בעצם הטקסט אינפוט שבסטייס יהיה שווה מחדש לערך הזה המחודש
    this.setState({ textInput: event.target.value });
  };

  // onFormSubmit = event => { -> בכל פעם שהמשתמש לוחץ אנטר הפונקציה הזו תפעל
  //     event.preventDefault(); -> גורם לכך שלא יהיה רענון בכל לחיצת אנטר של המשתמש בתיבת טקסט
  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.textInput);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              // {this.state.textInput} - הערך של האינפוט שיגיע מהמשתמש ב-דפדפן יגיע בערך הזה
              value={this.state.textInput}
              // onChange -> אירוע - בכל פעם שהערך בטקסט ישתנה אז הפעולה שהיא שווה לה תפעל בכל פעם
              // {this.onInputChange} -> כאן בעצם תופעל הפונקציית חץ שהיא מוגדרת בעצם למעלה אחרי הגדרת המצב כלומר בין ה-סטייס לבין ה-רנדר שם היא מוגדרת וכל פעם תעשה את השינוי המבוקש לפי מה שרשום שם בפונקציית התקשרות חוזרת
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;