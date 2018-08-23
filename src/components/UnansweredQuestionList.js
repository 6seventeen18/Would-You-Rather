import React, { Component } from 'react';
import { connect } from 'react-redux'
import Question from './Question'
import QuestionListNav from './QuestionListNav'

class UnansweredQuestionList extends Component {
  render() {
    return (
      <div className='container text-center'>
        <QuestionListNav viewType='unanswered' />

        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <div className="jumbotron pt-4 pb-4">
              {this.props.questionIds.map((id) => (
                <Question id={id} key={id} />
              ))}
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  const currentUser = users[authedUser]
  const questionIds = Object.keys(questions)
  const answeredQuestions = Object.keys(currentUser.answers)
  const unansweredQuestions = questionIds.filter((q) => answeredQuestions.indexOf(q) < 0)

  return {
    questionIds: unansweredQuestions
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(UnansweredQuestionList)
