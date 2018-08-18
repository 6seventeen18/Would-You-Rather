import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class QuestionListNav extends Component {
  static propTypes = {
    viewType: PropTypes.string.isRequired,
  }

  render() {
    const { viewType } = this.props

    if (viewType === 'answered') {
      return (
        <div>
          <NavLink to='/' exact className="nav-link d-inline-block">Unanswered Questions</NavLink>
          <span className="nav-link d-inline-block">Answered Questions</span>
        </div>
      )
    } else {
      return (
        <div>
          <span className="nav-link d-inline-block">Unanswered Questions</span>
          <NavLink to='/answered-questions' exact className="nav-link d-inline-block">Answered Questions</NavLink>
        </div>
      )
    }
  }
}

export default QuestionListNav
