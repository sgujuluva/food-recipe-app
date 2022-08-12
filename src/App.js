import "./App.css";
//hooks
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");


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
