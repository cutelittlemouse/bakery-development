import * as React from 'react';
import { Avatar, Button } from '@mui/material'
import Box from '@mui/material/Box';
import './Mouse.css';

export default function Mouse({ item, cart, setCart, cartNames, setCartNames, cheese, setCheese}) {

  function handleAdd(item) {
    const tempNames = [...cartNames, item.name]
    setCartNames(tempNames)
    setCheese(cheese + item.cheese)
  }

  function handleRemove(item) {
    const tempNames = cartNames.filter((x) => {
      return x !== item.name;
    })
    setCartNames(tempNames)
    setCheese(cheese - item.cheese);
  }

  return (
    <Box className="Mouse">
      <div  className="MouseImage" >
        <Avatar alt={"image of " + item.name} src={item.image} sx={{width: 200, height: 200}} style={{backgroundColor: 'white'}}/>
      </div>
      <div>
        <h3>{item.name}</h3>
        <h4>Age: {item.age}</h4>
        <h4>Type: {item.type}</h4>
        <h4>Favorite activity: {item.favorite_activity}</h4>
        <h4>Cheese: {item.cheese}</h4>
      </div>
      <div id="but">
        {(cartNames.includes(item.name)) ?
          <Button onClick={() => handleRemove(item)}> Remove </Button> :
          <Button onClick={() => handleAdd(item)}> Add </Button>
        }

      </div>
    </Box>
  )
}