import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link href="/books">Books</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;