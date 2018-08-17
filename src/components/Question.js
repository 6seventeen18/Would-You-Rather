import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { FaCheckCircle } from 'react-icons/fa'
import Pluralize from 'react-pluralize'

class Question extends Component {
  static propTypes = {
    viewType: PropTypes.string.isRequired,
  }

  render() {
    const { viewType } = this.props
    // const { author, optionOne, optionTwo } = this.props.question
    // debugger

    { /* TDOD: These need to be in a shared helpers file */ }
    const ANSWERED_QUESTION = 'answered'
    const UNANSWERED_QUESTION = 'unanswered'
    const FOR_SUBMISSION = 'forSubmission'
    const WITH_STATS = 'withStats'

    switch (viewType) {
      case ANSWERED_QUESTION :
        return this.answeredQuestion()
      case UNANSWERED_QUESTION :
        return this.unansweredQuestion()
      case FOR_SUBMISSION :
        return this.questionForSubmission()
      case WITH_STATS :
        return this.questionWithStats()
      default :
        return (
          <div>invalid state</div>
        )
    }
  }

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

  /* view for question/:id when logged in user has answered */
  questionWithStats = () => {
    const { viewType } = this.props
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
    return (
      <div className='card text-left mb-3'>
        <div className='card-header'>
          Poll by Joe Schmoe
          { /* TODO: this will go to /questions/:question_id when state is implemented */ }
          <NavLink to='/answered-question' exact className="btn btn-primary float-right">View Stats</NavLink>
        </div>
        <div className='card-body p-0'>
          <div className='row ml-0 mr-0'>
            <div className='column border-right p-3'>
              <img src='avatars/1.jpg' className='img-fluid rounded-circle'/>
            </div>
            <div className='column ml-3 p-3'>
              <p className='card-text font-weight-bold'>Would You Rather:</p>
              <div className='card-text'>
                <mark><strong>Fight one horse sized mouse</strong></mark>
                <FaCheckCircle className='text-success' />
              </div>
              <div className='card-text font-weight-bold'>-- OR --</div>
              <div className='card-text text-muted'>Fight one hundred mouse sized horses</div>
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

  return {
    authedUser,
    allowSubmit,
    id,
    question: question
      ? formatQuestion(question, users[question.author])
      : null
  }
}

export default connect(mapStateToProps)(Question)
