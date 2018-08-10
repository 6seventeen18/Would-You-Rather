import React, { Component } from 'react';
import Nav from './components/Nav'
import { BrowserRouter } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
