import React from "react";
//styles
import "./Recipe.css";
function Recipe({ recipeProp }) {
  return (
    <div className="recipe-list">
      <div className="card">
        {recipeProp.map((item, i) => (
          <li key={i}>
            <h2 className="label">{item.recipe.label}</h2>
            <img
              src={item.recipe.image}
              /* onClick={() => window.open(item.recipe.url)} */ alt=""
            />
            <div className="ing-details">
              <span className="ingri-title">Ingredients: </span>

              <p className="ingi-quan">
                {item.recipe.ingredients.map((ingri, index) => {
                  return <p>{ingri.text}</p>;
                })}
              </p>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Recipe;
