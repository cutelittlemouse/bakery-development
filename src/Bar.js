import * as React from 'react';
import mouseData from "./assets/mouse-data.json"
import { Button } from '@mui/material'
import { useState } from 'react';



export default function Bar({ data, setData }) {

    const typeNames = [...new Set(mouseData.map((Val) => Val.type))]
    const activityNames = [...new Set(mouseData.map((Val) => Val.favorite_activity))]
    const [filters, setFilters] = useState(['All1', 'All2'])
    const [sortType, setSortType] = useState("no")

    function handleReset() {
        setFilters(["All1", "All2"])
        setData([...mouseData])
        setSortType("no")
    }

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

        if (sortType === "alpha") {
            ret.sort((a, b) => { return a.name.localeCompare(b.name); })
        }
        if (sortType === "age") {
            ret.sort((a, b) => { return a.age - b.age; })
        }
        setData(ret);
    }

    function handleSort(st) {
        setSortType(st)
        let temp = [...data]
        if (st === "alpha") {
            temp.sort((a, b) => { return a.name.localeCompare(b.name); })
        }
        if (st === "age") {
            temp.sort((a, b) => { return a.age - b.age; })
        }
        setData(temp)
    }

    function selectedStyle(cond) {
        return cond ? { backgroundColor: 'blue', color: 'white' } : null
    }

    return (
        <div>
            <Button
                onClick={() => handleSort("alpha")}
                style={selectedStyle(sortType === "alpha")}>
                Sort alphabetically
            </Button>
            <Button
                onClick={() => handleSort("age")}
                style={selectedStyle(sortType === "age")}>
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
                            style={selectedStyle(filters.includes(Val))}>
                            {Val}
                        </Button>
                    )})}
                <Button onClick={() => handleFilter("All1")}
                    style={selectedStyle(filters.includes("All1"))}>
                    All types
                </Button>
            </div>
            <div>
                {activityNames.map((Val, id) => {
                    return (
                        <Button
                            onClick={() => handleFilter(Val)}
                            key={id}
                            style={selectedStyle(filters.includes(Val))}>
                            {Val}
                        </Button>
                    )})}
                <Button onClick={() => handleFilter("All2")}
                    style={selectedStyle(filters.includes("All2"))}>
                    All activities
                </Button>
            </div>
        </div>
    )
}