import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const USER_SUBMISSION = 'USER_SUBMISSION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function answerQuestion ({ qid, authedUser, answer }) {
  return {
    type: USER_SUBMISSION,
    qid,
    authedUser,
    answer,
  }
}

export function handlePickOption (info) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handlePickOption: ', e)
        alert('The was an error submitting the option. Please try again.')
      })
      .then((question) => dispatch(answerQuestion(info)))
      .then(() => dispatch(hideLoading()))
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
      .catch((e) => {
        console.warn('Error in handleAddQuestion: ', e)
        alert('The was an error submitting the question. Please try again.')
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
