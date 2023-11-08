import { createSlice, current } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({

  //query here, if empty do the rest of the code below:
  name: 'recipes',
  initialState: {
    totalRecipes: 0,
    lastRecipeId: 0,
    recipeList: {}, //an object that will store other objects 
  },
  reducers: {
    addRecipe: (state, action) => {
      //to add a new recipe
      const newRecipe = {
        recipetId: state.lastRecipeId + 1,
        title: action.payload.title,
        measurement: action.payload.measurement,
        ingredients: action.payload.ingredients,
        instructions: action.payload.instructions,
      };

      state.lastRecipeId += 1;
      state.totalRecipes += 1;

      state.recipeList.newRecipe = newRecipe;
      console.log('this is the state:', current(state))
    },
    addIngredient: (state, action) => {
      recipeList[action.payload.recipeTitle]
    },
    deleteRecipe: (state, action) => {

      state.totalRecipes -= 1;
      delete recipeList[action.payload.recipeTitle]

    },
  }
})

export const { addRecipe, addIngredient} = recipeSlice.actions;


export default recipeSlice.reducer;