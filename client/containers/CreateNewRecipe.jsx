import React from 'react';

const RecipeCreator = () => {

  return (
    <div id='create'>
      <div id='recipe-form'>
        <label>Recipe Title:</label>
        <input id='form-title' type='text' name='recipe-title' ></input>
        <label>Measurment Type:</label>
        <input type='datalist' list='measurment' />
          <datalist id='measurment'>
            <option value="Metric">Metric</option>
            <option value="US Standard">US Standard</option>
          </datalist>  
        <label> Recipe Ingredients:</label>
        <input id='form-ingredients' type='text' name='recipe-title' ></input>
        <label>Recipe Instructions:</label>
        <input id='form-instructions' type='text' name='recipe-title' ></input> 
        <button id='create-button'>Add Recipe</button>
        </div>
    </div>
  )
};

export default RecipeCreator;