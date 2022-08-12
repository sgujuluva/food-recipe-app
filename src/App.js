import "./App.css";
//hooks
import { useState, useEffect} from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  //fetching api async await
  const apiFetch = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${input}&app_id=${process.env.REACT_APP_API_ID}&app_key=${process.env.REACT_APP_API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();

  }

useEffect(() => {
 apiFetch(input)
 .then(data => console.log(data))
})


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
