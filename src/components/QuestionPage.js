import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
  render() {
    const { id } = this.props
    return (
      <div className='container text-center'>
        <div className='row'>
          <div className='col'></div>
          <div className='col-8'>
            <div className="jumbotron pt-4 pb-4">
              <Question id={id} viewType='unanswered' />
            </div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users }, props) {
  const { id } = props.match.params

  return {
    id
  }
}

export default connect(mapStateToProps)(QuestionPage)
