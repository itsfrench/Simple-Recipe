import React from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


/* <RecipeCreator /> */

const MainContainer = () => {
  const createNewRecipe = async () => {
    const res = await fetch('http://localhost:3000/start-new-recipe');
    const data = await res.json();
  }
  return(
    <div id='main-container'>
        <Link to='/start-new-recipe'>
        <button>Create Recipe</button>
        </Link>
        <Link to='/view-recipes'>
        <button>View All Recipes</button>
        </Link>
      <RecipeContainer /> 
    </div>
  );
}

export default MainContainer;