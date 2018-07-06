import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";
import "./App.css";
import ListBooks from "./ListBooks";
import Search from "./Search";

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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
        <Route
          exact
          path="/search"
          render={() => <Search books={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
