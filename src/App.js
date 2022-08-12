import "./App.css";
//hooks
import { useState } from "react";
import Axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [healthLabel,setHealthLabel] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${input}&app_id=1c719840&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=3&calories=591-722&health=${healthLabel}`;

  //fetching api async await
  const apiFetch = async () => {
    const response = await Axios.get(url);
    setRecipes(response.data.hits);
    console.log(response.data.hits)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiFetch();
  };

  return (
    <div className="recipe-content">
      <div className="header">
        <span>
          <h1 >Food Recipe Search</h1>
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
          <option value="vegan">Vegan</option>
        </select>
        <input type="submit" value="get recipe" className="submit" />
      </form>
    </div>
  );
}

export default App;
