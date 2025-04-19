import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Online Library</h1>
        <p className="home-subtitle">
          Explore a world of captivating stories.
        </p>
      </header>
      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-grid">
          <div className="book-item">
            <Link href="/books/1">
              <img src="https://th.bing.com/th/id/OIP.30k4y_ycLJqGr9GHzg2-kwHaLG?rs=1&pid=ImgDetMain" alt="Harry Potter" />
              <h3>Harry Potter</h3>
            </Link>
          </div>
          <div className="book-item">
            <Link href="/books/2">
              <img src="https://th.bing.com/th/id/OIP.r0CMJ08tBkYGqDgYI_94-QHaLH?rs=1&pid=ImgDetMain" alt="Pirates of the Caribbean" />
              <h3>Pirates of the Caribbean</h3>
            </Link>
          </div>
        </div>
      </section>
      <section className="call-to-action">
        <p>
          Dive into adventure! Browse our collection.
        </p>
        <section className="home-features">
                <h2>Key Features</h2>
                <ul>
                    <li>Extensive Book Catalog</li>
                    <li>Easy Search and Navigation</li>
                    <li>Detailed Book Information</li>
                    <li>Personalized Recommendations (Future)</li>
                </ul>
            </section>
        <Link href="/books" className="browse-button">
          Browse All
        </Link>
      </section>
    </div>
  );
};

export default Home;