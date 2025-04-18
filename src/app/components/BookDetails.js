import React from 'react';

const BookDetails = ({ book }) => {
  if (!book) {
    return <p>No book details available.</p>;
  }
  return (
    <div>
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default BookDetails;