import { RECEIVE_USERS } from '../actions/users'
import { USER_SUBMISSION } from '../actions/questions'

 export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case USER_SUBMISSION :
      const { qid, authedUser, answer } = action

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    default :
      return state
  }
}
