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

    const [ifSort, setIfSort] = useState("no")
    const [filteredData, setFilteredData] = useState(mouseData);
    const typeNames = [...new Set(mouseData.map((Val) => Val.type))]
    const activityNames = [...new Set(mouseData.map((Val) => Val.favorite_activity))]
    const [filters, setFilters] = useState(['All1', 'All2'])

    function handleFilter(filter) {
        let temp;
        if (typeNames.includes(filter) || filter === "All1") {
            temp = [filter, filters[1]]
        } else if (activityNames.includes(filter) || filter === "All2") {
            temp = [filters[0], filter]
        } else {
            temp = [...filters]
        }
        setFilters(temp)

        let data = [...mouseData]
        let dataTemp = data.filter((x) => {
            return (temp[1] === 'All2') ? x : x.favorite_activity === temp[1]
        })
        let ret = dataTemp.filter((x) => {
            return (temp[0] === 'All1') ? x : x.type === temp[0]
        })

        if (ifSort === "alpha") {
            ret.sort((a, b) => { return a.name.localeCompare(b.name); })
        }
        if (ifSort === "age") {
            ret.sort((a, b) => { return a.age - b.age; })
        }
        setFilteredData(ret);
    }

    function handleReset() {
        setFilters(["All1", "All2"])
        setFilteredData([...mouseData])
        setIfSort("no")
    }



    return (
        <div className="App">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Avatar src="images/cheese.jpg" sx={{ width: 300, height: 300 }} />
                <div>
                    <h1>Today's Mouse Feeding Plan</h1>
                    <div className='justify-content-center' style={{ display: 'flex' }}>
                        <div id="descriptionAndBar">
                            <Bar handleFilter={handleFilter} filters={filters} handleReset={handleReset} ifSort={ifSort} setIfSort={setIfSort} filteredData={filteredData} setFilteredData={setFilteredData} />
                            <p>Mice</p>
                        </div>
                    </div>
                </div>
            </div>
            <Aggregator cart={cart} cheese={cheese} cartNames={cartNames} />
            {(filteredData.map(
                (item) => (<Mouse item={item} cart={cart} setCart={setCart} cartNames={cartNames} setCartNames={setCartNames} cheese={cheese} setCheese={setCheese} />)
            ))}
        </div>
    );
}

export default App;