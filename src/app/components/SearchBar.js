'use client';

import { useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        onSearch(value);
      }, 500),
    [onSearch]
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    debouncedSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        value={term}
        onChange={handleChange}
        aria-label="Search books"
      />
    </div>
  );
};

export default SearchBar;