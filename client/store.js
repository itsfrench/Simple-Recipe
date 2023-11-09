import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import recipeSlice from './reducers/index';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools

const store = configureStore({
  devTools: true,
  reducer: {
    recipes: recipeSlice
  },
});
export default store;