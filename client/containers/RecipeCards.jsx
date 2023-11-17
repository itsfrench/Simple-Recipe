import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import { updateAllState } from '../reducers/index.js';

const RecipeCards = () => {

  const dispatch = useDispatch();

  const allRecipes = useSelector((state) => state.recipes.recipeList);
  const recipes = [];

  //function to send a delete request to the DB
  const deleteThisRecipe = async (event) => {
    const recipeToDelete = event.target.className;
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({title: recipeToDelete}),
      };
    try {
      const deletDate = await fetch('http://localhost:3000/delete-recipe', options);
      const response = await deletDate.json();
      console.log('this is the response from the server (delete): ', response);
      
      const getData = await fetch('http://localhost:3000/update-state');
        if (!getData.ok) {
          const message = `An error has occured: ${response.status}`;
          throw new Error(message);
        }
        const updateResponse = await getData.json();
        //create a payload object to dispatch to a reducer function to update the state
        
        const count = updateResponse[0];
        const array = updateResponse[1];
        
        dispatch(updateAllState({ count, array } ));

      return;
    }
    catch (err) {
      console.log('this is the catch error: ', err);
    }
  }

//logic to create all of the html contents for each recipe card
  for (let i = 0; i < allRecipes.length; i++) {
    let ingredients = [];
    for (let j = 0; j < allRecipes[i].ingredients.length; j++) {
      ingredients.push(
       <li>{allRecipes[i].ingredients[j]}</li>
      )
    }
    recipes.push(
      <div id='recipe-cards'>
        {/* <h3>Recipe Title: </h3> */}
        <h3>{allRecipes[i].title}</h3>
       
          <h2>Ingredients: </h2>
          <div id='ingredient-list'>
            <ul>{ingredients}</ul>
          </div>
          
          
          <h2>Instructions: </h2>
          <p id='text-instructions'>{allRecipes[i].instructions}</p>
          <button id='recipe-button-delete' className={allRecipes[i].title} onClick={deleteThisRecipe}>Delete</button>
          <button id='recipe-button-update' className={allRecipes[i].title}>Edit Recipe</button>
          </div>
      
    )
  }

  return (
    <div>{recipes}</div>
  )
}

export default RecipeCards;