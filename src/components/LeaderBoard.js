import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserStats from './UserStats'

class LeaderBoard extends Component {
  render() {
    return (
      <div className='container text-center'>
      <h1 className="h3 mb-3 font-weight-normal">Leader Board</h1>
        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <div className="jumbotron pt-4 pb-4">
              {this.props.userIds.map((id) => (
                <UserStats id={id} key={id} />
              ))}
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    userIds: Object.keys(users)
      .sort((a,b) =>
        (users[b].questions.length + Object.keys(users[b].answers).length) -
          (users[a].questions.length + Object.keys(users[a].answers).length)
      )
  }
}

export default connect(mapStateToProps)(LeaderBoard)
