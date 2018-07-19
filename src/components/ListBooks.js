import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  };

  render() {
    const books = this.props.books;

    // console.log("props", this.props);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              books={books.filter(book => books.shelf === "currentlyReading")}
              updateBookShelf={this.props.updateBookShelf}
              title="Currently Reading"
            />
            <BookShelf
              books={books.filter(book => books.shelf === "wantToRead")}
              updateBookShelf={this.props.updateBookShelf}
              title="Want to Read"
            />
            <BookShelf
              books={books.filter(book => books.shelf === "read")}
              updateBookShelf={this.props.updateBookShelf}
              title="Read"
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="./search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
