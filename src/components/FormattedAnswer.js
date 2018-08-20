import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FaCheckCircle } from 'react-icons/fa'
import Pluralize from 'react-pluralize'

class FormattedAnswer extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
    loggedInUser: PropTypes.object.isRequired,
    option: PropTypes.oneOf(['optionOne', 'optionTwo']).isRequired,
  }

  render() {
    const { question, loggedInUser, option } = this.props
    const { optionOne, optionTwo } = question
    const optionText = option === 'optionOne' ? optionOne.text : optionTwo.text
    const optionOneVotes = optionOne['votes'].length
    const optionTwoVotes = optionTwo['votes'].length
    const showStats = this.props.showStats || false
    const stats = option === 'optionOne'
      ? (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100)
      : (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100)
    const userSelectedOption = loggedInUser.answers[question.id]
    const markAsSelected = userSelectedOption && userSelectedOption === option

    return (
      <div>
        { markAsSelected
          ? <div className="d-inline-block">
              <mark><strong>{optionText}</strong></mark>
              <span className='font-italic'>(your selection)</span>
            </div>
          : `${optionText}`
        }

        { showStats
            ?
              <span className='font-italic text-success'>
                (
                <Pluralize singular="vote" plural="votes" count={optionOneVotes} />
                /
                {stats}%)
              </span>
            : null
        }
      </div>
    )
  }
}

export default FormattedAnswer
