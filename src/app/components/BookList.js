import dynamic from 'next/dynamic';

const BookDetails = dynamic(() => import('./BookDetails'), {
  loading: () => <div className="loading">Loading book...</div>,
});

export default function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        book.coverImage && (
          <BookDetails key={book.id} book={book} />
        )
      ))}
    </div>
  );
}