import React from 'react';
import './globals.css';
import Navbar from '../app/components/Navbar';

export const metadata = {
  title: 'Online Book Library',
  description: 'A Next.js application for browsing and managing books',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="main-content">{children}</main>
        <footer className="footer">
          <p>&copy; 2025 Online Book Library</p>
        </footer>
      </body>
    </html>
  );
}