import React from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect } from 'react';



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
      <RecipeContainer /> 
    </div>
  );
}

export default MainContainer;