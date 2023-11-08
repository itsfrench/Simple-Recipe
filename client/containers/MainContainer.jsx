import React from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import RecipeCreator from './RecipeCreator.jsx';


/* <RecipeCreator /> */

const MainContainer = () => {
  const createNewRecipe = () => {
    fetch('/start-new-recipe')
  }
  return(
    <div id='main-container'>
      <button onClick={createNewRecipe}>Create Recipe</button>
      <RecipeContainer /> 
    </div>
  );
}

export default MainContainer;