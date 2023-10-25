/*
  1. When the app starts, I can see all listings.
  2. I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
  3. I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
  4. I can search for listings by their name.

  The base URL for your backend is: http://localhost:6001

  In the App component: 
    - create a listings state variable
    - fetch the listings from the server in the useEffect hook
    - pass the listings state variable to the ListingContainer component
  In the ListingContainer component:
    - iterate through the listings variable and display the listings to the DOM
  In the ListingCard component:
    - when the user clicks on the delete button:
      -delete the listing from the server
      -delete the listing from the DOM
*/
import React,{useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  //fetch requests
  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(res => res.json())
    .then(listings => console.log(listings))
  },[])
  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
