import React, { useState } from "react";

function Search({ onSearchSubmit, setSort }) {
  const [searchValue, setSearchValue] = useState('')
  function handleSubmit(e) {
    e.preventDefault();
    onSearchSubmit(searchValue)
  }
  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
      <label>
        <input type="radio" name="Alphabetically" value='Alphabetically' onChange={(e) => { setSort(e.target.value) }} />
        Alphabetically
      </label>

    </form>
  );
}

export default Search;
