const Recipe = require('./recipeModel.js')

const controller = {};

controller.updateState = async (req, res, next) => {
  try {
    const dbResponse = await Recipe.find();
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

  const recipe = req.body.recipe
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

controller.deleteRecipe = async (req, res, next) => {
  const { title } = req.body;
  try{ 
    // const findRecipe = await Recipe.find({title});
    // console.log('this is what the DB found: ', findRecipe, findRecipe.id);
    const dbResponse = await Recipe.deleteOne({title});
    res.locals.response = dbResponse;
    next()
  }
  catch (err) {
    const error = {
      log: 'controller.deleteRecipe',
      status: 404,
      message: { err: err.message}
    }
    next(error);
  }
}
module.exports = controller;