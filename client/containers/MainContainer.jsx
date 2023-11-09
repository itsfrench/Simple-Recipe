import React from 'react';
import RecipeContainer from './RecipeContainer.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { updateAllState } from '../reducers/index.js';


const MainContainer = () => {
  //create a useEffect hook to fetch data from the database
  //once the data has been returned, dispatch a function to the reducer to update the default state
  const dispatch = useDispatch();

  useEffect( () => {
    const grab = async () => {
      try {
        const getData = await fetch('http://localhost:3000/update-state');
        // if (!getData.ok) {
        //   const message = `An error has occured: ${response.status}`;
        //   throw new Error(message);
        // }
        const response = await getData.json();
        //create a payload object to dispatch to a reducer function to update the state
        console.log('this is the server response: ', response);
        dispatch(updateAllState(response));
        
      }
      catch (err) {
        throw new Error(err.message);
      }
    }
    grab();
  }, []);

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