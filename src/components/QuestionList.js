import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Question from './Question'
import QuestionListNav from './QuestionListNav'

class QuestionList extends Component {
  // static propTypes = {
  //   viewType: PropTypes.string.isRequired,
  // }

  render() {
    // const { viewType } = this.props
    // const showSingle = viewType === 'forSubmission' || viewType === 'withStats'

    return (
      <div className='container text-center'>
        { /* TODO: This is just a stub for design purposes. QuestionList should be able
                   to render both types of questions, determine which type is currently
                   displayed, and show links to switch state */ }
        <QuestionListNav viewType='withStats' />

        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <div className="jumbotron pt-4 pb-4">
              {this.props.questionIds.map((id) => (
                <Question viewType='answered' id={id} key={id} />
              ))}
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

// export default QuestionList
export default connect(mapStateToProps)(QuestionList)
