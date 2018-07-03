import React from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import "./ListBooks";
// import "./Search";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
      // /**
      //  * TODO: Instead of using this state variable to keep track of which page
      //  * we're on, use the URL in the browser's address bar. This will ensure that
      //  * users can use the browser's back and forward buttons to navigate between
      //  * pages, as well as provide a good URL they can bookmark and share.
      //  */
      // showSearchPage: false
    };
  }

  // updateBookShelf = (book, shelf) => {};

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books: books
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => <ListBooks books={this.state.books} />}
        />
        {/* <Route
          exact
          path="/search"
          render={() => <Search books={this.state.books} />}
        /> */}
      </div>
    );
  }
}

export default App;
