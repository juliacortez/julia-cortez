import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
         <img src={logo} alt="XSistems" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header