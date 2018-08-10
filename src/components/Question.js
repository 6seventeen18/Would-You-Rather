import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class Question extends Component {
  static propTypes = {
    questionType: PropTypes.string.isRequired,
  }

  render() {
    const { questionType } = this.props

    if(questionType === 'answered') {
      return this.answeredQuestion()
    }

    if(questionType === 'unanswered') {
      return this.unansweredQuestion()
    }
  }

  answeredQuestion = () => {
    return (
      <div class='card text-left mb-3'>
        <div class='card-header'>
          Poll by Joe Schmoe
          <NavLink to='/home' exact className="btn btn-primary float-right">View Stats</NavLink>
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
              <div class='card-text text-muted'><del>Fight one hundred mouse sized horses</del></div>
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
          <NavLink to='/home' exact className="btn btn-primary float-right">Submit Answer</NavLink>
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
