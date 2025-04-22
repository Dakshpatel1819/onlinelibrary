'use client';

import React, { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BookItem = memo(function BookItem({ book }) {
  return (
    <div className="book-item">
      <Link href={`/books/${book.id}`}>
        <Image
          src={book.coverImage}
          alt={book.title}
          width={200}
          height={300}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          onError={(e) => { e.currentTarget.src = '/no-cover.png'; }}
        />
        <h3>{book.title}</h3>
        <p className="author">by {book.author}</p>
      </Link>
    </div>
  );
});

BookItem.displayName = 'BookItem';

const BookList = ({ books }) => {
  return (
    <div className="book-grid">
      {books.map(book => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default memo(BookList);