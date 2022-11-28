import * as React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Button } from '@mui/material'
import Box from '@mui/material/Box';


export default function Bar() {
    return (
        <div>
            <Button>
                Sort by age
            </Button>
            <Button>
                Filter by type
            </Button>
            <Button>
                Filter by favorite activity
            </Button>
        </div>
    )
}