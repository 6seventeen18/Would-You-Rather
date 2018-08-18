import { saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const TOGGLE_QUESTIONS = 'TOGGLE_QUESTIONS'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function toggleQuestions (questionType='unanswered', answeredQuestions) {
  return {
    type: TOGGLE_QUESTIONS,
    questionType,
    answeredQuestions
  }
}

export function handleToggleQuestions (questionType='unanswered') {
  // return (dispatch) => {
  //   dispatch(toggleQuestions(questionType))
  // }

  return (dispatch, getState) => {
    const { authedUser, users } = getState()
    const answeredQuestions = Object.keys(users[authedUser].answers)

    dispatch(toggleQuestions(questionType, answeredQuestions))

    // dispatch(showLoading())

    // return saveTweet({
    //   text,
    //   author: authedUser,
    //   replyingTo
    // })
    //   .then((tweet) => dispatch(addTweet(tweet)))
    //   .then(() => dispatch(hideLoading()))
  }
}

export function handleAddQuestion (pollOption1, pollOption2, id) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      author: authedUser,
      optionOneText: pollOption1,
      optionTwoText: pollOption2,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
