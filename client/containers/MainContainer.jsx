import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';



const MainContainer = () => {
  //create a useEffect hook to fetch data from the database
  //once the data has been returned, dispatch a function to the reducer to update the default state
  

 

  return(
    <div id='main-container' >
        <Link to='/start-new-recipe'>
        <button>Create Recipe</button>
        </Link>
        <Link to='/view-recipes'>
        <button>View Recipes</button>
        </Link>
    </div>
  );
}

export default MainContainer;