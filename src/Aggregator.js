import * as React from 'react';


export default function Aggregator({cart, cheese, cartNames}) {
    return (
        <div>
            <h2>Today's plan</h2>
            <h4>Names: 
                {
                (cartNames.length === 0) ?  <p>(empty)</p>: cartNames.map(x => (" " + x + ","))
                }
                 </h4>
            <h3>Total cheese: {cheese}</h3>
        </div>
    )
}