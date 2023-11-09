const Recipe = require('./recipeModel.js')

const controller = {};

controller.createRecipe = async (req, res, next) => {

};

controller.updateState = async (req, res, next) => {

  try {
    const dbResponse = await Recipe.find({});
    //grab 
    const count = await Recipe.countDocuments();
    res.locals.data = dbResponse;
    res.locals.count = count;
    next();
  }
  catch (err) {
    const error = {
      log: 'controller.updateState',
      status: 404,
      message: { err: err.message}
    }
    next(error);
  }
};

controller.createRecipe = async (req, res, next) => {

  console.log('this is the req body : ', req.body)
  // console.log('this is the recipe : ', req.body.recipe)

  const recipe = req.body.recipe

  // const recipe = {
  //   title: title,
  //   measurement: measurement,
  //   ingredients: ingredients,
  //   instructions: instructions,
  // }
  console.log('this is the recipe: ', recipe)
   try {
    const dbResponse = await Recipe.create(recipe);
    const response = dbResponse.toJSON();
    res.locals.response = response;
    next()
   }
   catch (err) {
    const error = {
      log: 'controller.createRecipe',
      status: 404,
      message: { err: err.message}
    }
    next(error);
   }
};
module.exports = controller;