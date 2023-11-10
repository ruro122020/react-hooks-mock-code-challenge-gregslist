import React, { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, image, description, location } = listing
  const [isFavorite, setIsFavorite] = useState(false)
  //function to delete listing from server
  const handleDeleteClick = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => onDeleteListing(listing))
  }
  const handleFavClick = () => {
    setIsFavorite(!isFavorite)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button className="emoji-button favorite active" onClick={handleFavClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavClick}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
