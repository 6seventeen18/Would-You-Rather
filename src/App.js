import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import LeaderBoard from './components/LeaderBoard'
import AddQuestion from './components/AddQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        {this.props.loading === true
          ? null
          : <AddQuestion />}
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
