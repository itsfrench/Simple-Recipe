import React from 'react';

const Header = () => {
  return (
    <div id='header'>
       <a href='/'><h1>Simple Recipes</h1></a>
      <a href='/'><img src='../assets/sando.png' alt="Illustrated image of a sandwich" id="sando" /></a>
      <img id='knife' src='../assets/tomato.png'/>
    </div>

  );
}

export default Header;