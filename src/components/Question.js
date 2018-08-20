import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import FormattedAnswer from './FormattedAnswer'

class Question extends Component {
  render() {
    { /* TODO: Add additional text when there is a tie */ }
    const { id, allowSubmit, loggedInUser } = this.props
    const hasAnswered = Object.keys(loggedInUser.answers).indexOf(id) >= 0

    if (allowSubmit) {
      if (hasAnswered) {
        return this.questionWithStats()
      } else {
        return this.questionForSubmission()
      }
    } else {
      if (hasAnswered) {
        return this.answeredQuestion()
      } else {
        return this.unansweredQuestion()
      }
    }
  }

  /* view for question/:id when logged in user has answered */
  questionWithStats = () => {
    const question = this.props.question
    const loggedInUser = this.props.loggedInUser
    const { author, optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = author
    const optionOneText = optionOne.text
    const optionTwoText = optionTwo.text
    const optionOneVotes = optionOne['votes'].length
    const optionTwoVotes = optionTwo['votes'].length

    return(
      <div className='card text-left mb-3'>
        <div className='card-header'>Stats for Poll by {author.name}</div>
        <div className='card-body p-0'>
          <div className='row ml-0 mr-0'>
            <div className='column border-right p-3'>
              <img src={avatarURL} className='img-fluid rounded-circle'/>
            </div>
            <div className='column ml-3 p-3'>
              <p className='card-text font-weight-bold'>Would You Rather:</p>
              <div className='card-text'>
                <FormattedAnswer question={question} loggedInUser={loggedInUser} option="optionOne" showStats={true} />
              </div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text'>
                <FormattedAnswer question={question} loggedInUser={loggedInUser} option="optionTwo" showStats={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* view for question/:id when logged in user has not answered */
  questionForSubmission = () => {
    const { id, author, optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = author
    const navLink = `/question/${id}`

    return(
      <div className='card text-left mb-3'>
        <div className='card-header'>
          Poll by {name}
        </div>
        <div className='card-body p-0'>
          <div className='row ml-0 mr-0'>
            <div className='column border-right p-3'>
              <img src={avatarURL} className='img-fluid rounded-circle'/>
            </div>
            <div className='column ml-3 p-3'>
              <p className='card-text font-weight-bold'>Would You Rather:</p>
              <div className='card-text'>
                { /* TODO: This will need to submit the answer */ }
                <NavLink to='/answered-question' className="btn btn-primary mr-2">pick me!</NavLink>
                {optionOne.text}
              </div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text'>
              { /* TODO: This will need to submit the answer */ }
                <NavLink to='/answered-question' className="btn btn-primary mr-2">pick me!</NavLink>
                {optionTwo.text}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* view for question on home page when logged in user has answered */
  answeredQuestion = () => {
    const question = this.props.question
    const loggedInUser = this.props.loggedInUser
    const { id, author } = question
    const { name, avatarURL } = author
    const navLink = `/question/${id}`

    return (
      <div className='card text-left mb-3'>
        <div className='card-header'>
          Poll by {name}
          <NavLink to={navLink} exact className="btn btn-primary float-right">View Stats</NavLink>
        </div>
        <div className='card-body p-0'>
          <div className='row ml-0 mr-0'>
            <div className='column border-right p-3'>
              <img src={avatarURL} className='img-fluid rounded-circle'/>
            </div>
            <div className='column ml-3 p-3'>
              <p className='card-text font-weight-bold'>Would You Rather:</p>
              <div className='card-text'>
                <FormattedAnswer question={question} loggedInUser={loggedInUser} option="optionOne" />
              </div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text'>
                <FormattedAnswer question={question} loggedInUser={loggedInUser} option="optionTwo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /* view for question on home page when logged in user has not answered */
  unansweredQuestion = () => {
    const { id, author, optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = author
    const navLink = `/question/${id}`

    return(
      <div className='card text-left mb-3'>
        <div className='card-header'>
          Poll by { author.name }
          <NavLink to={navLink} exact className="btn btn-primary float-right">Answer Poll</NavLink>
        </div>
        <div className='card-body p-0'>
          <div className='row ml-0 mr-0'>
            <div className='column border-right p-3'>
              <img src={avatarURL} className='img-fluid rounded-circle'/>
            </div>
            <div className='column ml-3 p-3'>
              <p className='card-text font-weight-bold'>Would You Rather:</p>
              <div className='card-text'>{optionOne.text}</div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text'>{optionTwo.text}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function formatQuestion (question, author) {
  return {
    id: question.id,
    timestamp: question.timestamp,
    author: author,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,
  }
}

function mapStateToProps({authedUser, questions, users}, props) {
  const { id } = props
  const question = questions[id]
  const allowSubmit = props.allowSubmit || false
  const loggedInUser = users[authedUser]

  return {
    authedUser,
    loggedInUser,
    allowSubmit,
    id,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(Question)
