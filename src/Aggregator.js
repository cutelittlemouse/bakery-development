import * as React from 'react';
import { Button } from '@mui/material'


export default function Aggregator({cart, cheese, cartNames, setCheese, setCartNames}) {
    
    function handleClick() {
        setCheese(0)
        setCartNames([])
    }

    return (
        <div>
            <h2>Today's plan</h2>
            <h4>Names: 
                {
                (cartNames.length === 0) ?  <p>(empty)</p>: cartNames.map(x => (" " + x + ","))
                }
                 </h4>
            <h3>Total cheese: {cheese}</h3>
            <Button onClick = {handleClick}> Clear cart</Button>
        </div>
    )
}