'use client';

import React, { useState } from 'react';
import BookList from '../components/BookList'; 
import SearchBar from '../components/SearchBar'; 

const initialBooks = [
  { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { id: 2, title: 'Pride and Prejudice', author: 'Jane Austen' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

const BooksPage = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredBooks = initialBooks.filter(
      (book) => book.title.toLowerCase().includes(term.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  return (
    <div>
      <h1>Book Listing</h1>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default BooksPage;