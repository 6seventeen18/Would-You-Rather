import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  TOGGLE_QUESTIONS
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
    case TOGGLE_QUESTIONS :
      return toggleQuestions(state, action)
    default :
      return state
  }
}

function toggleQuestions(questions, action) {
  const questionIds = Object.keys(questions)
  const answeredQuestions = action.answeredQuestions
  debugger

  switch(action.questionType) {
    case 'answered' :
      return {
        ...questions,
        ...answeredQuestions
      }
    case 'unanswered' :
      const unansweredQuestions = questionIds.filter((q) => answeredQuestions.indexOf(q) < 0)
      return {
        ...questions,
        ...unansweredQuestions
      }
    default :
      return questions
  }

  // return {
  //   questionIds: unansweredQuestions
  //     .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  // }
  // return {
  //   questions
  // }
}
