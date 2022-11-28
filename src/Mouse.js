import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material'
import Box from '@mui/material/Box';
import { Diversity3 } from '@mui/icons-material';
// import './Mouse.css';

export default function Mouse({ item }) {
  return (
    <div className="Mouse">
      <Box
        sx={{
          // width: 300,
          // height: 300,
          backgroundColor: 'primary.dark',
          // '&:hover': {
          //   backgroundColor: 'primary.main',
          //   opacity: [0.9, 0.8, 0.7],
          // },

        }}>
        <Avatar className="MouseImage" alt={"image of " + item.name} src={item.image} sx={{ width: 200, height: 200 }} style={{ backgroundColor: 'white' }} />

        <h3>{item.name}</h3>
        <h4>Age: {item.age}</h4>
        <h4>Type: {item.type}</h4>
        <h4>Favorite activity: {item.favorite_activity}</h4>
        <h4>Cheese: {item.cheese}</h4>
      </Box>
    </div>
  )
}