import React from "react";
//styles
import "./Recipe.css"
function Recipe({ recipeProp }) {
  return (
    <div className="recipe-list">
      
      <div className="card">
        {recipeProp.map((item, i) => (
          <li key={i}> 
          <img src={item.recipe.image} /* onClick={() => window.open(item.recipe.url)} */alt="" /> 
          <div className = "ing-details">
          <h2 className = "label">{item.recipe.label}</h2>
          
          <p className="ingri"><span>Ingredient Lines: </span><br/>{item.recipe.ingredientLines}</p> 
          </div>
          
          {/*  <p>Ingredients: <br/> {item.recipe.ingredients.text}
           {item.recipe.ingredients.quantity}
           {item.recipe.ingredients.measure}
           {item.recipe.ingredients.food}</p> */}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
