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

module.exports = controller;