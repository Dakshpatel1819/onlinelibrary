'use client';

import React, { useState, useEffect } from 'react';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const initialBooks = [
  { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', coverImage: 'https://th.bing.com/th/id/OIP.30k4y_ycLJqGr9GHzg2-kwHaLG?rs=1&pid=ImgDetMain' },
  { id: 2, title: 'Pirates of the Caribbean', author: 'Ted Elliott & Terry Rossio', coverImage: 'https://th.bing.com/th/id/OIP.r0CMJ08tBkYGqDgYI_94-QHaLH?rs=1&pid=ImgDetMain' },
  { id: 3, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', coverImage: 'https://th.bing.com/th/id/R.4ebd83de2db1e4c720951095e760b798?rik=dJnhMLwDKPMnYg&pid=ImgRaw&r=0' },
  { id: 4, title: 'One Piece', author: 'Eiichiro Oda', coverImage: 'https://th.bing.com/th/id/OIP.KBXCBAcFJVOsQzLMw-1-PgHaLw?rs=1&pid=ImgDetMain' },
  { id: 5, title: 'Naruto', author: 'Masashi Kishimoto', coverImage: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421597058/naruto-3-in-1-edition-vol-22-9781421597058_hr.jpg' },
];

const BooksPage = () => {
  const [books, setBooks] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;

  useEffect(() => {}, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filteredBooks = initialBooks.filter(book =>
      book.title.toLowerCase().includes(term.toLowerCase()) ||
      book.author.toLowerCase().includes(term.toLowerCase())
    );
    setBooks(filteredBooks);
    setCurrentPage(1);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="books-page">
      <header className="books-header">
        <h1>Book Listing</h1>
        <SearchBar onSearch={handleSearch} />
      </header>
      <BookList books={currentBooks} />
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default BooksPage;