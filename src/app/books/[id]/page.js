'use client'; 

import React from 'react';
import { useParams } from 'next/navigation';
import BookDetails from '../../components/BookDetails';

const bookDetailsData = {
    1: { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'A fantasy epic...' },
    2: { title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A classic romance...' },
    3: { title: '1984', author: 'George Orwell', description: 'A dystopian novel...' },
};

const BookDetailsPage = () => {
    const { id } = useParams();
    const book = bookDetailsData[id];

    if (!book) {
        return <p>Book not found</p>;
    }

    return (
        <div>
            <BookDetails book={book} />
        </div>
    );
};

export default BookDetailsPage;