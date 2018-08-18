import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

class QuestionListNav extends Component {
  static propTypes = {
    toggle: PropTypes.func.isRequired,
  }

  render() {
    const { viewType } = this.props

    { /* TDOD: These need to be in a shared helpers file */ }
    const ANSWERED_QUESTION = 'answered'
    const UNANSWERED_QUESTION = 'unanswered'
    const FOR_SUBMISSION = 'forSubmission'
    const WITH_STATS = 'withStats'

    return(
      <div>
        <a href='#' className="nav-link d-inline-block" onClick={(e) => this.props.toggle(e, 'unanswered')}>Unanswered Poll</a>
        <a href='#' className="nav-link d-inline-block" onClick={(e) => this.props.toggle(e, 'answered')}>Answered Poll</a>
      </div>
    )

    // switch (viewType) {
    //   case ANSWERED_QUESTION :
    //     return(
    //       <div>
    //         <NavLink to='/home' exact className="nav-link d-inline-block">Unanswered Polls</NavLink>
    //         <div className='d-inline-block'>Answered Polls</div>
    //       </div>
    //     )
    //   case UNANSWERED_QUESTION :
    //     return(
    //       <div>
    //         <div className='d-inline-block'>Unanswered Polls</div>
    //         <NavLink to='/answered-questions' exact className="nav-link d-inline-block">Answered Polls</NavLink>
    //       </div>
    //     )
    //   case FOR_SUBMISSION :
    //     return(
    //       <div>
    //         <h2>Select Your Answer!</h2>
    //       </div>
    //     )
    //   case WITH_STATS :
    //     return(
    //       <div>
    //         <h2>Poll Stats</h2>
    //       </div>
    //     )
    //   default :
    //     return (
    //       <div>invalid state</div>
    //     )
    // }
  }
}

export default QuestionListNav
