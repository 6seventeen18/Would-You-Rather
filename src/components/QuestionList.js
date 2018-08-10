import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Question from './Question'

class QuestionList extends Component {
  static propTypes = {
    questionType: PropTypes.string.isRequired,
  }

  render() {
    const { questionType } = this.props
    const showAnswered = questionType === 'answered'

    return (
      <div class='container text-center'>
        { /* TODO: This is just a stub for design purposes. QuestionList should be able
                   to render both types of questions, determine which type is currently
                   displayed, and show links to switch state */ }
        {showAnswered ? (
          <div>
            <NavLink to='/home' exact className="nav-link d-inline-block">Unanswered Polls</NavLink>
            <div class='d-inline-block'>Answered Polls</div>
          </div>
        ) : (
          <div>
            <div class='d-inline-block'>Unanswered Polls</div>
            <NavLink to='/answered-questions' exact className="nav-link d-inline-block">Answered Polls</NavLink>
          </div>
        )}

        <div class='row'>
          <div class='col'></div>
          <div class='col-8'>
            <div class="jumbotron pt-4 pb-4">
              <Question questionType={questionType} />
              <Question questionType={questionType} />
            </div>
          </div>
          <div class='col'></div>
        </div>
      </div>
    )
  }
}

export default QuestionList
