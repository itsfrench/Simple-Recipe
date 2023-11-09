import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const RecipeCards = () => {
  const allRecipes = useSelector((state) => state.recipes.recipeList);
  const recipes = [];
  console.log('here are all the recipes from the state: ', allRecipes)
  for (let i = 0; i < allRecipes.length; i++) {
    recipes.push(
      <div id='recipe-cards'>
        <h3>Recipe Title: </h3>
        <p>{allRecipes[i].title}</p>
       
          <h2>Ingredients: </h2>
          <p>{allRecipes[i].ingredients}</p>
          <h2>Instructions: </h2>
          <p id='text-instructions'>{allRecipes[i].instructions}</p>
          <button id='recipe-buttons'>Delete</button>
          <button id='recipe-buttons'>Edit Recipe</button>
          </div>
      
    )
  }
  

  return (
    <div>{recipes}</div>
  )
}

export default RecipeCards;