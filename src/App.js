import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import LeaderBoard from './components/LeaderBoard'
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
            <div class='container'>
              <LoginForm />
            </div>
          </div>
        )}/>

        <Route exact path='/leaderboard' render={() => (
          <div>
            <Nav />
            <LeaderBoard />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
