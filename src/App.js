import './App.css';
import mouseData from "./assets/mouse-data.json"
import Mouse from "./Mouse"
import Bar from "./Bar"
import Aggragator from "./Aggregator"

function App() {
    const sortedMouseData = mouseData.sort((a, b) => {
        return a.age - b.age;
    })

    return (
        <div className="App">
            <h1>Today's Mouse Feeding Plan</h1>
            <p>Mice</p>

            <Bar />
            {mouseData.map(
                (item) => (<Mouse item={item} />)
            )}

        </div>
    );
}

export default App;
