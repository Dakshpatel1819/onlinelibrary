import './globals.css';
import Navbar from '../app/components/Navbar';

export const metadata = {
    title: 'Online Book Library',
    description: 'A simple online book library built with Next.js',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
}