export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function formatUser (user, authedUser) {
  // const { id, likes, replies, text, timestamp } = user
  // const { name, avatarURL } = author
  //
  // return {
  //   name,
  //   id,
  //   timestamp,
  //   text,
  //   avatar: avatarURL,
  //   likes: likes.length,
  //   replies: replies.length,
  //   hasLiked: likes.includes(authedUser),
  //   parent: !parentTweet ? null : {
  //     author: parentTweet.author,
  //     id: parentTweet.id,
  //   }
  // }

  const { id, name, avatarURL, answers, questions } = user

  return {
    name,
    id,
    avatarURL,
    questions: questions,
    answers: answers
  }
}
