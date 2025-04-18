import React from 'react';

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to the Online Book Library</h1>
                <p className="home-subtitle">
                    Explore a vast collection of books from various genres and authors.
                </p>
            </header>
            <section className="home-about">
                <h2>About Our Library</h2>
                <p>
                    Our online library provides access to a wide range of literary works,
                    from classic novels to contemporary bestsellers. We aim to make
                    reading accessible and enjoyable for everyone.
                </p>
                <p>
                    Discover new authors, revisit your favorite books, and immerse
                    yourself in the world of literature.
                </p>
            </section>
            <section className="home-features">
                <h2>Key Features</h2>
                <ul>
                    <li>Extensive Book Catalog</li>
                    <li>Easy Search and Navigation</li>
                    <li>Detailed Book Information</li>
                    <li>Personalized Recommendations (Future)</li>
                </ul>
            </section>
            <footer className="home-footer">
                <p>&copy; 2024 Online Book Library. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;