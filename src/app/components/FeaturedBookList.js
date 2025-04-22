import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedBookList({ books }) {
  if (!books || books.length === 0) {
    return <p>No featured books available.</p>;
  }

  return (
    <div className="featured-book-list">
      {books.map((book) => (
        book.coverImage && (
          <div key={book.id} className="book-item">
            <Link href={`/books/${book.id}`} aria-label={`View details for ${book.title}`}>
              <Image
                src={book.coverImage}
                alt={book.title}
                width={200}
                height={300}
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL="/no-cover.png"
              />
            </Link>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
          </div>
        )
      ))}
    </div>
  );
}