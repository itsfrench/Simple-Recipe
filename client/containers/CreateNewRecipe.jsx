import React from 'react';

const RecipeCreator = () => {

  return (
    <div>
      <h3>Create a new recipe</h3>
      <div>
        <label>Title:</label>
        <input id='form' type='text' name='market-namer' ></input>  {/* onChange={setLocation} */}
        <button id={'locationButton'}>Add Market</button>
        </div>
    </div>
  )
};

export default RecipeCreator;