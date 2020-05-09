import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar,Toolbar,IconButton ,Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar variant="dense">
            
            <Typography variant="h6" color="inherit">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    </div>
  );
}

export default App;
