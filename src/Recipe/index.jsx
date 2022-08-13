import React from "react";
//styles
import "./Recipe.css"
function Recipe({ recipeProp }) {
  return (
    <div className="recipe-list">
      <h1>List of Recipes with ingredients requested:</h1>
      <p>
        {recipeProp.map((item, i) => (
          <li key={i}> 
          <p className = "label">{item.recipe.label}</p>
          <img src={item.recipe.image} /* onClick={() => window.open(item.recipe.url)} */alt="" /> 
           <p>Ingrdients: <br/>{item.recipe.ingredientLines}</p> 
          </li>
        ))}
      </p>
    </div>
  );
}

export default Recipe;
