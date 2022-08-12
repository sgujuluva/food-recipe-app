import React from 'react'

function Recipe({recipeProp} ) {
  return (
    <div className="recipe-list">
      <h1>List of Recipes requested:</h1>
     <p>{recipeProp.map((item,i)=> <li key={i}> {item.recipe.label}</li>)}</p> 
    
    </div>
  )
}

export default Recipe