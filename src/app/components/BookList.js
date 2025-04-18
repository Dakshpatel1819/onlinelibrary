import React from 'react';
import Link from 'next/link';

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link href={`/books/${book.id}`}>{book.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BookList;