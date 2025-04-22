'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import * as api from '../../lib/api';

export default function BookDetailsPage({ params }) {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      setError(null);
      try {
        const data = await api.getBookById(params.id);
        if (!data) {
          throw new Error('Book not found');
        }
        setBook(data);
      } catch (err) {
        setError('Failed to fetch book details. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    fetchBook();
  }, [params.id]);

  if (loading) return <div className="loading">Loading book details...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!book) return <div className="error">Book not found</div>;

  return (
    <main className="container">
      <h1>{book.title}</h1>
      <div className="book-details">
        <Image
          src={book.coverImage}
          alt={book.title}
          width={300}
          height={450}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="/no-cover.png"
        />
        <div className="book-info">
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>
        </div>
      </div>
    </main>
  );
}