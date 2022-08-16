import "./App.css";
//hooks
import { useEffect, useState } from "react";
import Axios from "axios";
//components
import Recipe from "../src/Recipe";

function App() {
  const [input, setInput] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${input}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}
 &health=${healthLabel}`;
  /*  &from=0&to=10&calories=591-722  */
  //fetching api async await
  const apiFetch = async () => {
    const response = await Axios.get(url);
    setRecipes(response.data.hits);
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    apiFetch();
  }; 
 /*  useEffect(() => {
    apiFetch();
  },[]) */

  return (
    <div className="recipe-content">
      <div className="header">
        <span>
          <h1>Food Recipe Search</h1>
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          value={input}
          placeholder="Type the Ingredient"
        />
        <select
          onChange={(e) => setHealthLabel(e.target.value)}
          className="ingredient-labels"
        >
          <option value="vegan">Vegan</option>

          <option value="vegetarian">Vegetarian</option>

          <option value="eggs">Eggs</option>

          <option value="dairy ">Dairy</option>

          <option value="low-fat">Low Fat</option>

          <option value="low-sugar">Low Sugar</option>

          <option value="gluten">Gluten</option>
        </select>
       <input type="submit" value="Get Recipe" className="submit" />
      </form>

      <Recipe recipeProp={recipes} />
    </div>
  );
}

export default App;
