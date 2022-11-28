// import mui react stuff
import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import Box from '@mui/material/Box';

export default function Mouse(props) {
    return (
        <div className="Mouse">
    <Box
      sx={{
        // width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
            <h3>{props.item.name}</h3>
            <h4>Age: {props.item.age}</h4>
            <h4>Type: {props.item.type}</h4>
            <h4>Favorite activity: {props.item.favorite_activity}</h4>
            <h4>Cheese: {props.item.cheese}</h4>
            <img className="MouseImage" alt= {"image of " + props.item.name} src={props.item.image}/>
    </Box>
        </div>
    )
}