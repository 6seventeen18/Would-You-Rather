import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import Pluralize from 'react-pluralize'

class Question extends Component {
  render() {
    { /* TODO: Add additional text when there is a tie */ }
    const { id, allowSubmit, loggedInUser } = this.props
    const hasAnswered = Object.keys(loggedInUser.answers).indexOf(id) >= 0

    if (allowSubmit) {
      console.log('allowSubmit = true')
      if (hasAnswered) {
        console.log('hasAnswered = true')
        return this.questionWithStats()
      } else {
        console.log('hasAnswered = false')
        return this.questionForSubmission()
      }
    } else {
      console.log('allowSubmit = false')
      if (hasAnswered) {
        console.log('hasAnswered = true')
        return this.answeredQuestion()
      } else {
        console.log('hasAnswered = false')
        return this.unansweredQuestion()
      }
    }
  }

  /* for /question/:id */
  formattedAnswer = (firstOption, secondOption) => {
    const optionText = firstOption.text
    const firstOptionVotes = firstOption['votes'].length
    const secondOptionVotes = secondOption['votes'].length

    return (
      <div>
        { (firstOptionVotes >= secondOptionVotes)
          ? <mark><strong>{optionText}</strong></mark>
          : `${optionText}`
        }

        { firstOptionVotes >= secondOptionVotes
            ? <FaCheckCircle className='text-success' />
            : null
        }
        <span className='font-italic text-success'>
          (
          <Pluralize singular="vote" plural="votes" count={firstOptionVotes} />
          /
          {firstOptionVotes / (firstOptionVotes + secondOptionVotes) * 100}%)
        </span>
      </div>
    )
  }

  /* for home page */
  formattedAnswerForUser = (option, highlightOption = false) => {
    const optionText = option.text

    return (
      <div>
        { (highlightOption)
          ?
            <div className='.d-inline-block'>
              <mark><strong>{optionText}</strong></mark>
              <FaCheckCircle className='text-success' />
              <span className='font-italic text-success'>(your selection)</span>
            </div>
          : `${optionText}`
        }
      </div>
    )
  }

  /* view for question/:id when logged in user has answered */
  questionWithStats = () => {
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
                { this.formattedAnswer(optionOne, optionTwo) }
              </div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text'>
                { this.formattedAnswer(optionTwo, optionOne) }
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
    const { id, author, optionOne, optionTwo } = this.props.question
    const { name, avatarURL } = author
    const navLink = `/question/${id}`
    const highlightOptionOne = author.answers[id] === 'optionOne'
    const highlightOptionTwo = author.answers[id] === 'optionTwo'

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
                { this.formattedAnswerForUser(optionOne, highlightOptionOne) }
              </div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text'>
                { this.formattedAnswerForUser(optionTwo, highlightOptionTwo) }
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

// function formatQuestion (question, users) {
function formatQuestion (question, author) {
  return {
    id: question.id,
    timestamp: question.timestamp,
    author: author,
    optionOne: question.optionOne,
    optionTwo: question.optionTwo,
  }
}

// function mapStateToProps({authedUser, questions, users}, props) {
// function mapStateToProps({authedUser, questions, users}, { id }) {
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
