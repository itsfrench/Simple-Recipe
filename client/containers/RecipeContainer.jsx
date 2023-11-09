import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecipeCards from './RecipeCards.jsx'

import { updateAllState } from '../reducers/index.js';


const RecipeContainer = () => {
  //populate some stuff from react here 
  //populate recipes in this container 
  // const count = useSelector(state => state.lastRecipeId);
  
  // <RecipeCards />
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

  return (
    <div></div>
  )
}

export default RecipeContainer;