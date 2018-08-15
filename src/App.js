import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LeaderBoard from './components/LeaderBoard'
import LoadingBar from 'react-redux-loading-bar'
import AddQuestion from './components/AddQuestion'
import Question from './components/Question'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <LoadingBar />
        {this.props.loading === true
          ? null
          : <Question match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}} viewType='withStats' />}
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
