import logo from './logo.svg';
import './App.css';

const MICE = [
  { name: "Jerry", age: "3", type: "cartoon character", favorite_activity: "playing with cats", cheese: "20" },
  { name: "Squeaky", age: "1", type: "chipmunk", favorite_activity: "sleeping", cheese: "30" },
  { name: "Mango", age: "2", type: "guinea pig", favorite_activity: "eating", cheese: "40" },
  { name: "Cici", age: "1", type: "sugar glider", favorite_activity: "eating", cheese: "30" },
  { name: "Mickey", age: "1", type: "cartoon character", favorite_activity: "sleeping", cheese: "15" },
  { name: "Little Cheese", age: "3", type: "hamster", favorite_activity: "playing with cats", cheese: "10" },
  { name: "Yellow", age: "1", type: "sugar glider", favorite_activity: "sleeping", cheese: "20" },
  { name: "Tiny", age: "2", type: "hamster", favorite_activity: "playing with cats", cheese: "20" },
  { name: "Daisy", age: "2", type: "guinea pig", favorite_activity: "sleeping", cheese: "20" },
  { name: "Coco", age: "1", type: "hamster", favorite_activity: "playing with cats", cheese: "20" },
  { name: "Minnie", age: "2", type: "cartoon character", favorite_activity: "eating", cheese: "60" },
  { name: "Remy", age: "3", type: "cartoon character", favorite_activity: "sleeping", cheese: "15" },
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React happily
        </a>
        <p>test3</p>
      </header>


    </div>
  );
}

export default App;
