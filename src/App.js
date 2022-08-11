
import './App.css';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="App">
     <h1>Food Receipe Search</h1>
     <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Type the Ingredient'/>
      <select className="ingredient-labels" name="" id="">
        <option value="vegan">Vegan</option>
      </select>
      <button onChange={(e) => e.target.value }>Get Receipe</button>
     </form>
    </div>
  );
}

export default App;
