import React from 'react';

const BookDetails = ({ book }) => {
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details">
      <div className="book-cover">
        <img src={book.coverImage} alt={book.title} />
      </div>
      <div className="book-info">
        <h2>{book.title}</h2>
        <p className="author">by {book.author}</p>
        <p className="description">{book.description}</p>
        <button className="action-button">Borrow</button>
        <button className="action-button">Reserve</button>
      </div>
    </div>
  );
};

export default BookDetails;