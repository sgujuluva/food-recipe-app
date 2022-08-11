
import './App.css';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="recipe-content">
     <h1>Food Recipe Search</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type the Ingredient'/>
      <select className="ingredient-labels" name="" id="">
        <option value="vegan">Vegan</option>
      </select>
      <button onChange={(e) => e.target.value }>Get Recipe</button>
     </form>
    </div>
  );
}

export default App;
