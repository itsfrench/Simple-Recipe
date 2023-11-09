import { createSlice, current } from '@reduxjs/toolkit';

export const recipeSlice = createSlice({

  //query here, if empty do the rest of the code below:
  name: 'recipes',
  initialState: {
    lastRecipeId: 1,
    recipeList: {}, //an object that will store other objects 
  },
  reducers: {
    addRecipe: (state, action) => {
      //to add a new recipe
      const newRecipe = {
        recipeId: state.lastRecipeId + 1,
        title: action.payload.title,
        measurement: action.payload.measurement,
        ingredients: action.payload.ingredients,
        instructions: action.payload.instructions,
      };

      state.lastRecipeId += 1;

      state.recipeList.newRecipe = newRecipe;
      console.log('this is the state:', current(state))
    },
    updateAllState: (state, action) => {
      const count = action.payload[0];
      const dbRecipeList = {};
      let i = 1;
      for (const objs of action.payload[i]) {
        dbRecipeList[i] = action.payload[i][objs];
        i++;
      }
      console.log('Here are the objects: ', dbRecipeList);
      state.lastRecipeId += count;
      state.recipeList = dbRecipeList;
      console.log('this is the state:', current(state));
    },
    addIngredient: (state, action) => {
      recipeList[action.payload.recipeTitle]
    },
    deleteRecipe: (state, action) => {

      state.lastRecipeId -= 1;
      delete recipeList[action.payload.recipeTitle]

    },
  }
})

export const { addRecipe, addIngredient, updateAllState } = recipeSlice.actions;


export default recipeSlice.reducer;