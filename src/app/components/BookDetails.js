import Image from 'next/image';
import Link from 'next/link';

export default function BookDetails({ book }) {
  return (
    <div className="book-details">
      <Link href={`/books/${book.id}`} aria-label={`View details for ${book.title}`}>
        <Image
          src={book.coverImage}
          alt={book.title}
          width={300}
          height={450}
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          placeholder="blur"
          blurDataURL="/no-cover.png"
        />
      </Link>
      <div className="book-info">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author}</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
}