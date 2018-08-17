import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LeaderBoard from './components/LeaderBoard'
import LoadingBar from 'react-redux-loading-bar'
import AddQuestion from './components/AddQuestion'
import QuestionPage from './components/QuestionPage'
import Question from './components/Question'
import QuestionList from './components/QuestionList'
import Nav from './components/Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (

      <Router>
        <Fragment>
          <LoadingBar />
          <div>
            { this.props.loading === true
              ? null
              : <div>
                  <Nav />
                  <div className='container'>
                  <Route path='/' exact component={QuestionList} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/add' component={AddQuestion} />
                  <Route path='/question/:id' component={QuestionPage} />
                  { /* don't need this one
                  <Route path='/create' render={() => (
                    <Question match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} viewType='withStats' />
                  )} /> */ }
                </div>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
