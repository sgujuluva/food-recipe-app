import "./App.css";
//hooks
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
let app_id="1c719840";
let app_key="804c77a30e46d9113a63ba170f404f73";
let url = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free";


  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };
  console.log("the input is:", input);

  return (
    <div className="recipe-content">
      <div className="header">
        <span>
          {" "}
          <h1>Food Recipe Search</h1>{" "}
        </span>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={input} placeholder="Type the Ingredient" />
        <select className="ingredient-labels" name="" id="">
          <option value="vegan">Vegan</option>
        </select>
        <button >Get Recipe</button>
      </form>
    </div>
  );
}

export default App;
