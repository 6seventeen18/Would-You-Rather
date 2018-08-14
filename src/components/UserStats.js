import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatUser, formatDate } from '../utils/helpers'

class UserStats extends Component {
  render() {
    const { user } = this.props
    const { id, name, avatarURL, questions, answers } = user
    const questionsAsked = questions.length
    const questionsAnswered = Object.keys(answers).length

    return (
      <div className='card text-left mb-3' key={id}>
        <div className='card-header'>{name}</div>
        <div className='card-body p-0'>
          <div className='row ml-0 mr-0'>
            <div className='column border-right p-3'>
              <img src={avatarURL} className='img-fluid rounded-circle'/>
            </div>
            <div className='column ml-3 p-3'>
              <p className='card-text font-weight-bold'>Questions Asked: {questionsAsked}</p>
              <p className='card-text font-weight-bold'>Questions Answered: {questionsAnswered}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({authedUser, users}, { id }) {
  const user = users[id]
  return {
    authedUser,
    user: user
      ? formatUser(user, authedUser)
      : null
  }
}

export default connect(mapStateToProps)(UserStats)
