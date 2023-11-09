import React from 'react';
import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe } from '../reducers/index.js';

//component that returns the html for this page 
const RecipeCreator = () => {

  const dispatch = useDispatch();

  //function that creates the recipe object and dispatches it to a reducer function to update the state 
  const addRecipeFunc = () => {

    const submitRecipe = async (recipe) => {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({recipe: recipe}),
        };
      try {
        const serverResponse = await fetch('http://localhost:3000/create-new-recipe', options);
        const response = await serverResponse.json();
        console.log('this is the server response: ', response);
        return;
      }
      catch (err) {
        console.log('this is the catch error: ', err);
      // throw new Error(err.message);
      }
    }
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
    console.log('this is the form data: ', formData)
    dispatch(addRecipe(formData));
    //here is where I need to make a POST reques to my DB

    //subscribe to state to get the id 
    // const recipeId = useSelector(state => state.lastRecipeId);
    // formData.id = recipeId - 1;
    submitRecipe(formData);

    //set all of the form fields to empty
    const firstIng = document.querySelector('.first-ingredient');
    formTitle.value = ''; 
    setIngredientsArray([]);
    // formIngredients.value = ''; 
    firstIng.value = '';
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
        <input id='form-ingredients' className='first-ingredient' type='text' name='recipe-title' ></input>
        {ingredientsArray}
        <button id='add-ingredients' onClick={addAnotherField}>Add an Ingredient</button>
        <label>Recipe Instructions:</label>
        <textarea id='form-instructions' name='recipe-title'></textarea>
        {/* <input  type='text'  ></input>  */}
        <button id='create-button' onClick={addRecipeFunc}>Add Recipe</button>
        </div>
    </div>
  )
};

export default RecipeCreator;