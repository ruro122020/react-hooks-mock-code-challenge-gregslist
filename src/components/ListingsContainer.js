import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings}) {
  const displayListings = listings.map(listing => <ListingCard listing={listing}/>)
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
