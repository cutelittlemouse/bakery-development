import './App.css';
import mouseData from "./assets/mouse-data.json"
import Mouse from "./Mouse"

function App() {
  return (
    <div className="App">
      <h1>Today's Mouse Feeding Plan</h1>
      <p>Miracle loves mice.</p>
      {mouseData.map(
        (item) => (<Mouse item={item} />)
      )}
    </div>
  );
}

export default App;
