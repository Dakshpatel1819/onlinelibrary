## 📖 Overview

Welcome to the **Online Book Library**, a web app built with **Next.js** using the **Gutendex API** (powered by Project Gutenberg). Phase 3 enhances the app by fixing image issues, improving reliability, and securely storing the project in a private GitHub repository.

**Goals of Phase 3**:

- Fix book cover images to eliminate broken links and use a `no-cover.png` placeholder.
- Enhance app reliability with robust error handling.
- Store the project in a private GitHub repository for security and collaboration.
- Maintain core features like browsing, searching, and viewing book details.

---

## ✨ Features

### Perfect Book Covers

- Fixed 404 errors by using correct image URLs from the Gutendex API.
- Supports images from `gutendex.com` and `www.gutenberg.org`.
- Displays `no-cover.png` for books without cover images.

### Smarter API

- Validates data before displaying books to prevent crashes.
- Provides improved error messages for easier debugging.

### Safe Code Storage

- Uploaded the project to a private GitHub repository using Visual Studio Code (VS Code).
- Configured `.gitignore` to exclude sensitive files (e.g., `node_modules`, `.env`).

### Core Features Retained

- Browse featured books on the homepage.
- Search and filter books using a search bar.
- Navigate book lists with pagination.
- View book details including titles, authors, and descriptions.

---

## 📂 Project Structure

```
online-book-library/
├── public/                     # Static assets
│   └── no-cover.png            # Placeholder image
├── src/
│   ├── app/                    # Main app code
│   │   ├── components/         # Reusable components (e.g., BookList, SearchBar)
│   │   ├── lib/                # API logic (api.js)
│   │   ├── books/              # Book-related pages
│   │   ├── styles/             # CSS styles
│   │   ├── layout.js           # App layout with Navbar
│   │   └── page.js             # Homepage
├── .gitignore                  # Files to exclude from Git
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
└── README.md                   # Project documentation

```

---

## 🚀 Get Started

### Prerequisites

- **Node.js**: v18 or higher
- **Git**: For GitHub integration
- **VS Code**: Recommended editor
- **GitHub Account**: Access to the private repository

### Setup Steps

1. **Clone the Repository**:
    
    ```bash
    git clone <https://github.com/Dakshpatel1819/onlinelibrary.git>
    cd online-book-library
    
    ```
    
    - Replace `your-username` with your GitHub username.
    - Use a GitHub Personal Access Token or SSH key for private repo access.
2. **Install Dependencies**:
    
    ```bash
    npm install
    
    ```
    
3. **Add Placeholder Image**:
    - Ensure `public/no-cover.png` exists in the `public/` folder.
    - If missing, add a simple book cover image.
4. **Run the App**:
    
    ```bash
    npm run dev
    
    ```
    
    - Open `http://localhost:3000` in your browser.

### How to Use

- **Homepage**: View featured books at `/`.
- **Books Page**: Search and browse at `/books`.
- **Search**: Use the search bar to find books by title or author.
- **Book Details**: Click a book to view details at `/books/[id]` (e.g., `/books/1342`).
- **Pagination**: Navigate book lists using page numbers.

---

## 🛠️ Working with GitHub

### Push Changes

1. Open the project in VS Code.
2. Edit files (e.g., update `BookList.js`).
3. In the **Source Control** panel:
    - Click `+` to stage changes.
    - Enter a commit message (e.g., "Added new search feature").
    - Click the checkmark to commit.
4. Click **Sync Changes** (circular arrow) or select **Push** from the menu.
5. Sign in to GitHub if prompted (use a Personal Access Token for HTTPS).

### Pull Changes

1. In the **Source Control** panel, click **Sync Changes** or select **Pull**.
2. Resolve conflicts in VS Code if they arise, then stage and commit.

### Keep It Private

- Only you and invited collaborators can access the repository.
- Add collaborators via GitHub: `Repository > Settings > Collaborators > Invite`.

---

## 🔮 What's Next?

- **Faster Loading**: Reduce API calls for quicker image loading.
- **Better Images**: Integrate high-quality covers from Google Books API.
- **Tests**: Add automated tests for reliability.
- **Deploy**: Host the app online using Vercel or similar platforms.

---

## 🛠️ Troubleshooting

- **Broken Images**?
    - Verify `public/no-cover.png` exists.
    - Ensure `next.config.js` includes `gutendex.com` and `www.gutenberg.org`.
- **GitHub Login Issues**?
    - Use a Personal Access Token or configure SSH keys.
- **App Not Working**?
    - Check the browser console for errors.
    - Verify the Gutendex API is accessible.

---

## 🙌 Thanks

- Built with **Next.js** and **Gutendex API**.
- Special thanks to **Grok** (created by xAI) for help with debugging and GitHub setup.


