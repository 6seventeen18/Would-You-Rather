import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class Question extends Component {
  static propTypes = {
    viewType: PropTypes.string.isRequired,
  }


  render() {
    const { viewType } = this.props

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

  questionWithStats = () => {
    return(
      <div class='card text-left mb-3'>
        <div class='card-header'>Stats for Poll by Joe Schmoe</div>
        <div class='card-body p-0'>
          <div class='row ml-0 mr-0'>
            <div class='column border-right p-3'>
              <img src='avatars/1.jpg' class='img-fluid rounded-circle'/>
            </div>
            <div class='column ml-3 p-3'>
              <p class='card-text font-weight-bold'>Would You Rather:</p>
              <div class='card-text'>
                <mark><strong>Fight one horse sized mouse</strong></mark>
                <span class='font-italic text-success'>(5 votes / 60%)</span>
              </div>
              <div class='card-text font-weight-bold'>-- OR --</div>
              <div class='card-text text-muted'>
                Fight one hundred mouse sized horses
                <span class='font-italic text-success'>(5 votes / 60%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  questionForSubmission = () => {
    return(
      <div class='card text-left mb-3'>
        <div class='card-header'>
          Poll by Joe Schmoe
        </div>
        <div class='card-body p-0'>
          <div class='row ml-0 mr-0'>
            <div class='column border-right p-3'>
              <img src='avatars/1.jpg' class='img-fluid rounded-circle'/>
            </div>
            <div class='column ml-3 p-3'>
              <p class='card-text font-weight-bold'>Would You Rather:</p>
              <div class='card-text'>
                { /* TODO: This will need to submit the answer */ }
                <NavLink to='/answered-question' className="btn btn-primary mr-2">pick me!</NavLink>
                Fight one horse sized mouse
              </div>
              <div class='card-text font-weight-bold'>-- OR --</div>
              <div class='card-text'>
              { /* TODO: This will need to submit the answer */ }
                <NavLink to='/answered-question' className="btn btn-primary mr-2">pick me!</NavLink>
                Fight one hundred mouse sized horses
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  answeredQuestion = () => {
    return (
      <div class='card text-left mb-3'>
        <div class='card-header'>
          Poll by Joe Schmoe
          { /* TODO: this will go to /questions/:question_id when state is implemented */ }
          <NavLink to='/answered-question' exact className="btn btn-primary float-right">View Stats</NavLink>
        </div>
        <div class='card-body p-0'>
          <div class='row ml-0 mr-0'>
            <div class='column border-right p-3'>
              <img src='avatars/1.jpg' class='img-fluid rounded-circle'/>
            </div>
            <div class='column ml-3 p-3'>
              <p class='card-text font-weight-bold'>Would You Rather:</p>
              <div class='card-text'><mark><strong>Fight one horse sized mouse</strong></mark></div>
              <div class='card-text font-weight-bold'>-- OR --</div>
              <div class='card-text text-muted'>Fight one hundred mouse sized horses</div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  unansweredQuestion = () => {
    return(
      <div class='card text-left mb-3'>
        <div class='card-header'>
          Poll by Joe Schmoe
          { /* TODO: this will go to /questions/:question_id when state is implemented */ }
          <NavLink to='/unanswered-question' exact className="btn btn-primary float-right">Answer Poll</NavLink>
        </div>
        <div class='card-body p-0'>
          <div class='row ml-0 mr-0'>
            <div class='column border-right p-3'>
              <img src='avatars/1.jpg' class='img-fluid rounded-circle'/>
            </div>
            <div class='column ml-3 p-3'>
              <p class='card-text font-weight-bold'>Would You Rather:</p>
              <div class='card-text'>Fight one horse sized mouse</div>
              <div class='card-text font-weight-bold'>-- OR --</div>
              <div class='card-text'>Fight one hundred mouse sized horses</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Question
