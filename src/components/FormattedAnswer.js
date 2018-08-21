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

    let optionVotes = 0
    let stats = 0

    if (option === 'optionOne') {
      stats = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100)
      optionVotes = optionOneVotes
    } else {
      stats = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100)
      optionVotes = optionTwoVotes
    }

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
                <Pluralize singular="vote" plural="votes" count={optionVotes} />
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
