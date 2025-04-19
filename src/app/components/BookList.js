import React from 'react';
import Link from 'next/link';

const BookList = ({ books }) => {
  return (
    <div className="book-list">
      {books.map(book => (
        <div key={book.id} className="book-item">
          <Link href={`/books/${book.id}`}>
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p className="author">by {book.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;