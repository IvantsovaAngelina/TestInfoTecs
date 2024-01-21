import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="searchDiv">
      <input
        className='inputSearch'
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Поиск..."
      />
    </div>
  );
}

export default SearchBar;