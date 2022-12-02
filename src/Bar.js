import * as React from 'react';
import mouseData from "./assets/mouse-data.json"
import { Button } from '@mui/material'



export default function Bar({ handleFilter, handleReset, filters, ifSort, setIfSort, filteredData, setFilteredData}) {

    const typeNames = [...new Set(mouseData.map((Val) => Val.type))]
    const activityNames = [...new Set(mouseData.map((Val) => Val.favorite_activity))]

    function handleSortAlpha() {
        setIfSort("alpha")
        let temp = [...filteredData]
        temp.sort((a, b) => {
            return a.name.localeCompare(b.name);
        })
        setFilteredData(temp)
    }

    function handleSortAge() {
        setIfSort("age")
        let temp = [...filteredData]
        temp.sort((a, b) => {
            return a.age - b.age;
        })
        setFilteredData(temp)
    }
    
    return (
        <div>
            <Button onClick={handleSortAlpha} style={(ifSort === "alpha") ? { backgroundColor: 'blue', color: 'white' } : null}>
                Sort alphabetically
            </Button>
            <Button onClick={handleSortAge} style={(ifSort === "age")? { backgroundColor: 'blue', color: 'white' } : null}>
                Sort by age
            </Button>
            <Button onClick={handleReset}>
                Reset filters
            </Button>
            <div>
                {typeNames.map((Val, id) => {
                    return (
                        <Button
                            onClick={() => handleFilter(Val)}
                            key={id}
                            style={filters.includes(Val) ? { backgroundColor: 'blue', color: 'white' } : null}
                        >
                            {Val}
                        </Button>
                    );
                })}
                <Button onClick={() => handleFilter("All1")}
                    style={filters.includes("All1") ? { backgroundColor: 'blue', color: 'white' } : null}
                >
                    All types
                </Button>
            </div>
            <div className="anotherTest">
                {activityNames.map((Val, id) => {
                    return (
                        <Button
                            onClick={() => handleFilter(Val)}
                            key={id}
                            style={filters.includes(Val) ? { backgroundColor: 'blue', color: 'white' } : null}
                        >
                            {Val}
                        </Button>
                    );
                })}
                <Button onClick={() => handleFilter("All2")}
                    style={filters.includes("All2") ? { backgroundColor: 'blue', color: 'white' } : null}
                >
                    All activities
                </Button>
            </div>
        </div>
    )
}