import React from 'react';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../reducers/index.js';

//component that returns the html for this page 
const RecipeCreator = () => {

  const dispatch = useDispatch();

  //function that creates the recipe object and dispatches it to a reducer function to update the state 
  const addRecipeFunc = () => {
    const formData = {};

    //grab all of the text from the form fields
    const formTitle = document.querySelector('#form-title');
    formData.title = formTitle.value;
    const formMeasurement = document.querySelector('#form-measurement');
    formData.measurement = formMeasurement.value;
    const formIngredients = document.querySelectorAll('#form-ingredients');

    //need to grab all form fields for ingredients  and put them into an array
    const ingredientArray = [];
    for (const formIng of formIngredients) {
      ingredientArray.push(formIng.value);
    }
    formData.ingredients = ingredientArray;
    const formInstructions = document.querySelector('#form-instructions');
    formData.instructions = formInstructions.value;
  
    for (const keys in formData) {
      if (formData[keys] === '') return 
    }
    console.log(formData)
    dispatch(addRecipe(formData));
    formTitle.value = ''; 
    setIngredientsArray([]);
    formIngredients.value = ''; 
    formInstructions.value = ''; 
  }
  //state variable for the additonal ingredient fields 
  const [ingredientsArray, setIngredientsArray] = useState([]);

  //function to add another ingredient field when the button is clicked 
  const addAnotherField = () => {
    const newArray = ingredientsArray.slice()
    newArray.push(<input id='form-ingredients' type='text' name='recipe-title' ></input>);
    setIngredientsArray(newArray)
    return ingredientsArray;
  }
  //render the following html
  return (
    <div id='create'>
      <div id='recipe-form'>
        <label>Recipe Title:</label>
        <input id='form-title' type='text' name='recipe-title' ></input>
        <label>Measurement Type:</label>
        {/* <input type='datalist' list='measurement' /> */}
          <select id='form-measurement'>
            <option value="Metric">Metric</option>
            <option value="US Standard">US Standard</option>
          </select>  
        <label> Recipe Ingredients:</label>
        <input id='form-ingredients' type='text' name='recipe-title' ></input>
        {ingredientsArray}
        <button id='add-ingredients' onClick={addAnotherField}>Add an Ingredient</button>
        <label>Recipe Instructions:</label>
        <input id='form-instructions' type='text' name='recipe-title' ></input> 
        <button id='create-button' onClick={addRecipeFunc}>Add Recipe</button>
        </div>
    </div>
  )
};

export default RecipeCreator;