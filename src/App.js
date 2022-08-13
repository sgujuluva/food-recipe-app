import "./App.css";
//hooks
import { useState } from "react";
import Axios from "axios";
//components
import Recipe from "../src/Recipe";

function App() {
  const [input, setInput] = useState("");
  const [healthLabel, setHealthLabel] = useState("vegan");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${input}&app_id=1c719840&app_key=
  804c77a30e46d9113a63ba170f404f73&health=${healthLabel}`;
/*  &from=0&to=10&calories=591-722  */
  //fetching api async await
  const apiFetch = async () => {
    const response = await Axios.get(url);
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiFetch();
  };

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
        <select className="ingredient-labels" name="" id="">
          <option onClick={() => setHealthLabel("vegan")} value="vegan">
            Vegan
          </option>

          <option
            onClick={() => setHealthLabel("vegetarian")}
            value="vegetarian"
          >
            Vegetarian
          </option>

          <option onClick={() => setHealthLabel("eggs")} value="eggs">
            Eggs
          </option>

          <option onClick={() => setHealthLabel("dairy")} value="dairy ">
            Dairy
          </option>

          <option onClick={() => setHealthLabel("low-fat")} value="low-fat">
            Low Fat
          </option>

          <option onClick={() => setHealthLabel("fish")} value="fish">
            Fish
          </option>

          <option onClick={() => setHealthLabel("paleo")} value="paleo">
            Paleo
          </option>

          <option onClick={() => setHealthLabel("low-sugar")} value="low-sugar">
            Low Sugar
          </option>

          <option onClick={() => setHealthLabel("gluten")} value="gluten">
            Gluten
          </option>
        </select>
        <input type="submit" value="get recipe" className="submit" />
      </form>

      <Recipe recipeProp={recipes} />
    </div>
  );
}

export default App;
