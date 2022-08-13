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
          <span className="ingri-title">Ingredients: </span>
          <p className="ingri"><br/>{item.recipe.ingredientLines}</p> 
          <p className="ingi-quan">Ingredients: <br/> {item.recipe.ingredients.text}
           {item.recipe.ingredients.quantity}
           {item.recipe.ingredients.measure}
           {item.recipe.ingredients.food}</p>
          </div>
          
          {/*   */}
          </li>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
