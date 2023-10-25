import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {
  //functions to pass down as props to components
  const handleDeleteListing = (deleteListing) => {
    const newListings = listings.filter(listings => listings.id !== deleteListing.id)
    setListings(newListings)
  }
  const displayListings = listings.map(listing => <ListingCard
    key={listing.id}
    listing={listing}
    onDeleteListing={handleDeleteListing}
  />)
  return (
    <main>
      <ul className="cards">
        {/* use the ListingCard component to display listings */}
        {displayListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
