export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatUser (user, authedUser) {
  const { id, name, avatarURL, answers, questions } = user

  return {
    name,
    id,
    avatarURL,
    questions: questions,
    answers: answers
  }
}
