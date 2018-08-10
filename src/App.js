import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import { BrowserRouter } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div class='text-center'>
            <Nav />
            <LoginForm />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
