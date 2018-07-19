import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Book from "./Book";

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book, id) => (
              <Book
                book={book}
                key={id}
                updateBookShelf={this.props.updateBookShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
