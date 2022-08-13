import React from "react";
//styles
import "./Recipe.css"
function Recipe({ recipeProp }) {
  return (
    <div className="recipe-list">
      <h1>List of Recipes with ingredients:</h1>
      <p>
        {recipeProp.map((item, i) => (
          <li key={i}> 
          <p className = "label">{item.recipe.label}</p>
          <img src={item.recipe.image} /* onClick={() => window.open(item.recipe.url)} */alt="" /> 
           <p>Ingrdient Lines: <br/>{item.recipe.ingredientLines}</p> 
           <p>Ingredients: <br/> {item.recipe.ingredients.text}
           {item.recipe.ingredients.quantity}
           {item.recipe.ingredients.measure}
           {item.recipe.ingredients.food}</p>
          </li>
        ))}
      </p>
    </div>
  );
}

export default Recipe;
