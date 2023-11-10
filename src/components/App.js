/*
  1. When the app starts, I can see all listings.
  2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
  3. I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
  4. I can search for listings by their name.
  All required deliverables are done
*/
import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import ItemForm from "./ItemForm";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('')

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(res => res.json())
      .then(listings => setListings(listings))
  }, [])

  const handleSearchSubmit = (inputSearch) => {
    setSearch(inputSearch)
  }

  const handleAddNewItem = (newItem) => {
    setListings([...listings, newItem])
  }

  const filteredListings = listings.filter(listing => {
    if (listing.description.toLowerCase().includes(search.toLowerCase())) {
      return true
    }
  })
    .sort((locationA, locationB) => {
      if (sort) {
        const nameA = locationA.location.toUpperCase();
        const nameB = locationB.location.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
    })
  return (
    <div className="app">
      <Header onSearchSubmit={handleSearchSubmit} setSort={setSort} />
      <ItemForm onAddNewItem={handleAddNewItem} />
      <ListingsContainer listings={filteredListings} setListings={setListings} />
    </div>
  );
}

export default App;
