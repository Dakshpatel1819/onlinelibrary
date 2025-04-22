'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import * as api from '../lib/api';

const BookList = dynamic(() => import('@/app/components/BookList'), {
  loading: () => <div className="loading">Loading books...</div>,
});
const SearchBar = dynamic(() => import('@/app/components/SearchBar'), {
  loading: () => <div className="loading">Loading search...</div>,
});
const Pagination = dynamic(() => import('@/app/components/Pagination'), {
  loading: () => <div className="loading">Loading pagination...</div>,
});

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const booksPerPage = 10;

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getBookList(searchTerm, currentPage, booksPerPage);
        setBooks(data.results || []);
        setTotalBooks(data.count || 0);
      } catch (err) {
        setError('Failed to fetch books. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, [searchTerm, currentPage]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <main className="container">
      <h1>Explore Books</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <div className="loading">Loading books...</div>}
      {error && <div className="error">{error}</div>}
      <BookList books={books} />
      <Pagination
        currentPage={currentPage}
        totalItems={totalBooks}
        itemsPerPage={booksPerPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
}