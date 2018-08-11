import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Question from './Question'
import QuestionListNav from './QuestionListNav'

class QuestionList extends Component {
  static propTypes = {
    viewType: PropTypes.string.isRequired,
  }

  render() {
    const { viewType } = this.props
    const showSingle = viewType === 'forSubmission' || viewType === 'withStats'

    return (
      <div class='container text-center'>
        { /* TODO: This is just a stub for design purposes. QuestionList should be able
                   to render both types of questions, determine which type is currently
                   displayed, and show links to switch state */ }
        <QuestionListNav viewType={viewType} />

        <div class='row'>
          <div class='col'></div>
          <div class='col-8'>
            <div class="jumbotron pt-4 pb-4">
              { /* TODO: Remove this when a list of questions is passed in */ }
              {showSingle ? (
                <Question viewType={viewType} />
              ) : (
                <div>
                  <Question viewType={viewType} />
                  <Question viewType={viewType} />
                </div>
              )}
            </div>
          </div>
          <div class='col'></div>
        </div>
      </div>
    )
  }
}

export default QuestionList
