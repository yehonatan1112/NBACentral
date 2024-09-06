// src/components/Navbar.jsx (Updated to include Dark Mode Toggle)
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';

function Navbar({ toggleDarkMode }) {
  const theme = useTheme();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NBA Stats
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/teams">
            Teams
          </Button>
          <Button color="inherit" component={Link} to="/players">
            Players
          </Button>
          <Button color="inherit" component={Link} to="/standings">
            Standings
          </Button>
          <Button color="inherit" component={Link} to="/schedule">
            Schedule
          </Button>
          <Button color="inherit" component={Link} to="/stats">
            Stats
          </Button>
          <IconButton color="inherit" onClick={toggleDarkMode}>
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
