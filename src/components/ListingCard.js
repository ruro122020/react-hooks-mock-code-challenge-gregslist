import React from "react";

function ListingCard({listing, onDeleteListing}) {
  const {id, image, description, location} = listing

  //function to delete listing from server
  const handleDeleteClick=()=>{
    fetch(`http://localhost:6001/listings/${id}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(()=> onDeleteListing(listing))
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
