'use client';

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search books..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;