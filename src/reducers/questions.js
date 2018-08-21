import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  USER_SUBMISSION,
} from '../actions/questions'

 export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      const { question } = action

      return {
        ...state,
        [action.question.id]: action.question,
      }
    case USER_SUBMISSION :
      const { qid, authedUser, answer } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default :
      return state
  }
}
