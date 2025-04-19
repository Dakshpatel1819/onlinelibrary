'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import BookDetails from '../../components/BookDetails';

const bookDetailsData = {
  1: { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', description: 'The boy who lived...', coverImage: 'https://th.bing.com/th/id/OIP.30k4y_ycLJqGr9GHzg2-kwHaLG?rs=1&pid=ImgDetMain' },
  2: { id: 2, title: 'Pirates of the Caribbean', author: 'Ted Elliott & Terry Rossio', description: 'Jack Sparrow\'s adventures...', coverImage: 'https://th.bing.com/th/id/OIP.r0CMJ08tBkYGqDgYI_94-QHaLH?rs=1&pid=ImgDetMain' },
  3: { id: 3, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'The fellowship\'s journey...', coverImage: 'https://th.bing.com/th/id/R.4ebd83de2db1e4c720951095e760b798?rik=dJnhMLwDKPMnYg&pid=ImgRaw&r=0' },
  4: { id: 4, title: 'One Piece', author: 'Eiichiro Oda', description: 'Luffy\'s quest for treasure...', coverImage: 'https://th.bing.com/th/id/OIP.KBXCBAcFJVOsQzLMw-1-PgHaLw?rs=1&pid=ImgDetMain' },
  5: { id: 5, title: 'Naruto', author: 'Masashi Kishimoto', description: 'A ninja\'s path to Hokage...', coverImage: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421597058/naruto-3-in-1-edition-vol-22-9781421597058_hr.jpg' },
};

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    setBook(bookDetailsData[id]);
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="book-details-page">
      <BookDetails book={book} />
    </div>
  );
};

export default BookDetailsPage;