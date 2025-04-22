Online Library Application
A web-based platform built with Next.js to browse and explore books online. Users can view featured books, check book details, and search for titles, making it easy to access a digital library from anywhere.
Features

Browse featured books on the homepage
View detailed book information (title, author, cover, description)
Search for books using keywords
Responsive design for desktop and mobile
Modular components for scalability

Tech Stack

Next.js: React framework for routing and rendering
React: Component development and state management
CSS Modules: Responsive styling
Google Books API: Fetches book data
Git/GitHub: Version control

Setup Instructions

Clone the repository:git clone https://github.com/your-username/online-library-application.git


Navigate to the project directory:cd online-library-application


Install dependencies:npm install


Create a .env.local file and add your Google Books API key:GOOGLE_BOOKS_API_KEY=your-api-key


Run the development server:npm run dev


Open http://localhost:3000 in your browser.

Project Structure

Phase 1: FoundationSet up project structure, built core components (Navbar, BookList, BookItem), and implemented basic navigation.
Phase 2: Intermediate Functionality and StylingAdded routing for homepage, book details, and search pages, refactored components, and applied responsive styling.

Challenges Overcome

Fixed Next.js routing issues by using next/link for client-side navigation.
Resolved mobile styling inconsistencies with media queries and browser dev tools.

Future Scope

Add user authentication for personalized features
Implement book borrowing/reservation system
Enable user reviews and ratings
Optimize performance with lazy loading and caching

Contributing
Contributions are welcome! Please open an issue or submit a pull request with your ideas or improvements.
License
This project is licensed under the MIT License.
