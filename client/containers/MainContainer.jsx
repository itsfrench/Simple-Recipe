import React from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


const MainContainer = () => {
  
  return(
    <div id='main-container'>
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