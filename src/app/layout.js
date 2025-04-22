import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Online Library',
  description: 'A digital library for public domain books',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}