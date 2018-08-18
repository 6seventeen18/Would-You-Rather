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
  const answeredQuestionKeys = action.answeredQuestions

  switch(action.questionType) {
    case 'answered' :
      const answeredQuestionArray = answeredQuestionKeys.map((key) => questions[key])
      const answeredQuestions = {}

      for(const q of answeredQuestionArray.entries()) {
        answeredQuestions[q[1].id] = q[1]
      }

      console.log('answered state: ', { ...questions, ...answeredQuestions, })

      return {
        ...questions,
        ...answeredQuestions,
      }
    case 'unanswered' :
      const unansweredQuestionIds = questionIds.filter((q) => answeredQuestionKeys.indexOf(q) < 0)
      const unansweredQuestionArray = unansweredQuestionIds.map((key) => questions[key])
      const unansweredQuestions = {}
      for(const q of unansweredQuestionArray.entries()) {
        unansweredQuestions[q[1].id] = q[1]
      }

      console.log('unanswered state: ', { ...questions, ...unansweredQuestions, })

      return {
        ...questions,
        ...unansweredQuestions,
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
