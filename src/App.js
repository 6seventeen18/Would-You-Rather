import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Nav from './components/Nav'
import LoginForm from './components/LoginForm'
import LeaderBoard from './components/LeaderBoard'
import QuestionList from './components/QuestionList'
import { BrowserRouter } from 'react-router-dom'


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        { /* TODO: This is just a stub for design purposes. LoginForm should
                   display as a guard on any page when user is not logged in.
                   The home page should display at the '/' path */ }
        <Route exact path='/' render={() => (
          <div class='text-center'>
            <Nav />
            <div class='container'>
              <LoginForm />
            </div>
          </div>
        )}/>

        <Route exact path='/home' render={() => (
          <div>
            <Nav />
            <QuestionList questionType='unanswered' />
          </div>
        )}/>

        { /* TODO: Delete this when state is added */ }
        <Route exact path='/answered-questions' render={() => (
          <div>
            <Nav />
            <QuestionList questionType='answered' />
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
