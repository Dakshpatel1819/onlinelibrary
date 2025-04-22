import Link from 'next/link';

export default async function HomePage() {
  return (
    <main className="main">
      <header className="header">
        <h1>Welcome to the Online Library</h1>
        <p className="home-subtitle">
          Explore and discover your favorite books!
        </p>
      </header>
      
      <section className="call-to-action">
        <p>Start browsing our collection or search for a specific book.</p>
        <Link href="/books" className="browse-button">
          Browse Books
        </Link>
      </section>
      
      <section className="about">
        <h2>About the Library</h2>
        <p>
          The Online Library is a digital platform dedicated to providing free access to public domain books 
          through the Gutendex API. Our mission is to make literature accessible to everyone, fostering a love 
          for reading and learning. Browse books, search for your favorite titles, and discover new 
          stories—all from the comfort of your device.
        </p>
      </section>
      
      <section className="rules">
        <h2>Library Rules</h2>
        <ul>
          <li><strong>Respect Public Domain Content:</strong> All books are sourced from the public domain. Please use them responsibly and give credit where applicable.</li>
          <li><strong>No Commercial Use:</strong> The content is for personal, educational use only. Do not use it for commercial purposes.</li>
          <li><strong>Be Kind:</strong> Share your love for books respectfully—no spam or inappropriate behavior in search queries or interactions.</li>
          <li><strong>Device Compatibility:</strong> Ensure your device has a stable internet connection for the best browsing experience.</li>
        </ul>
      </section>
    </main>
  );
}