import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      
      <ul>
        <li>
          <Link href="/" aria-label="Go to homepage">
            Home
          </Link>
        </li>
        <li>
          <Link href="/books" aria-label="Go to books page">
            Books
          </Link>
        </li>
      </ul>
    </nav>
  );
}