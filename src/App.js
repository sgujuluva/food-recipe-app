
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Food Receipe Search</h1>
     <form>
      <input type="text" placeholder='Type the Ingredient'/>
      <select className="ingredient-labels" name="" id="">
        <option value="vegan">Vegan</option>
      </select>
      <button>Search</button>
     </form>
    </div>
  );
}

export default App;
