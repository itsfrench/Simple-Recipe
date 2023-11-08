import React from 'react';
import Header from './containers/Header.jsx';
import MainContainer from './containers/MainContainer.jsx';
import RecipeCreator from './containers/CreateNewRecipe.jsx';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './styles.css'

const App = () => {
  return (
    <Router>
      <div>
          <Header />
        <Routes>
          <Route exact path='/start-new-recipe' element={ <RecipeCreator />}></Route> 
          <Route path='/' element={ <MainContainer />}></Route> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
{/* <Header />
<MainContainer /> */}