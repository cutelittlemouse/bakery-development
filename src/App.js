import './App.css';
import mouseData from "./assets/mouse-data.json"
import Mouse from "./Mouse"
import Bar from "./Bar"
import * as React from 'react';
import { Avatar } from '@mui/material'

import { useState } from 'react';
import Aggregator from './Aggregator';


function App() {

    const [cart, setCart] = useState({})
    const [cartNames, setCartNames] = useState([])
    const [cheese, setCheese] = useState(0)
    const [data, setData] = useState(mouseData);


    return (
        <div className="App">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar src="images/cheese.jpg" sx={{ width: 300, height: 300 }} />
                <div>
                    <h1>Today's Mouse Feeding Plan</h1>
                    <div className='justify-content-center' style={{ display: 'flex' }}>
                        <div id="descriptionAndBar">
                            <Bar data={data} setData={setData} />
                        </div>
                    </div>
                </div>
            </div>
            <Aggregator cart={cart} cheese={cheese} setCheese={setCheese} cartNames={cartNames} setCartNames={setCartNames} />
            {(data.map(
                (item) => (<Mouse item={item} cart={cart} setCart={setCart} cartNames={cartNames} setCartNames={setCartNames} cheese={cheese} setCheese={setCheese} />)
            ))}
        </div>
    );
}

export default App;