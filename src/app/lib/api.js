import { cache } from 'react';

const fetchFromGutendex = cache(async (urlPath, cacheKey) => {
  try {
    const response = await fetch(`https://gutendex.com${urlPath}`, {
      cache: 'force-cache',
    });
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching from Gutendex for ${cacheKey}:`, error);
    return null;
  }
});

function getCoverImageUrlFromFormats(formats) {
  if (!formats) return '/no-cover.png';
  return formats['image/jpeg'] || formats['image/png'] || '/no-cover.png';
}

function optimizeBookData(book) {
  return {
    id: book.id,
    title: book.title,
    author: book.authors?.[0]?.name || 'Unknown Author',
    coverImage: getCoverImageUrlFromFormats(book.formats),
    description: book.subjects?.join(', ') || 'No description available',
  };
}

export async function getFeaturedBooks(query = 'fiction', limit = 3) {
  const cacheKey = `featured_${query}_${limit}`;
  const data = await fetchFromGutendex(`/books/?search=${encodeURIComponent(query)}`, cacheKey);
  if (!data || !data.results) return [];
  return data.results.slice(0, limit).map(optimizeBookData);
}

export async function getBookList(query = '', page = 1, limit = 10) {
  const cacheKey = `list_${query}_${page}_${limit}`;
  const data = await fetchFromGutendex(
    `/books/?search=${encodeURIComponent(query)}&page=${page}`,
    cacheKey
  );
  if (!data || !data.results) return { results: [], count: 0 };
  return {
    results: data.results.slice(0, limit).map(optimizeBookData),
    count: data.count,
  };
}

export async function getBookById(id) {
  const cacheKey = `book_${id}`;
  const data = await fetchFromGutendex(`/books/${id}/`, cacheKey);
  if (!data) return null;
  return optimizeBookData(data);
}