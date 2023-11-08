import React from 'react';
import { useDispatch } from 'react-redux';
import { addRecipe } from '../reducers/index.js';

const RecipeCreator = () => {

  const dispatch = useDispatch();

  const addRecipeFunc = () => {
    const formData = {};
  
    const formTitle = document.querySelector('#form-title');
    formData.title = formTitle.value;
    const formMeasurement = document.querySelector('#form-measurement');
    formData.measurement = formMeasurement.value;
    const formIngredients = document.querySelector('#form-ingredients');
    formData.ingredients = formIngredients.value;
    const formInstructions = document.querySelector('#form-instructions');
    formData.instructions = formInstructions.value;
  
    for (const keys in formData) {
      if (formData[keys] === '') return 
    }
    console.log(formData)
    dispatch(addRecipe(formData));
    formTitle.value = ''; 
    formMeasurement.value = ''; 
    formIngredients.value = ''; 
    formInstructions.value = ''; 
  }

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
        <label>Recipe Instructions:</label>
        <input id='form-instructions' type='text' name='recipe-title' ></input> 
        <button id='create-button' onClick={addRecipeFunc}>Add Recipe</button>
        </div>
    </div>
  )
};

export default RecipeCreator;