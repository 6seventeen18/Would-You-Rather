import React from 'react'

export default function UserStats () {
  const divStyle = { maxWidth: '618px' }
  const rightColumnStyle = { backgroundColor: 'blue' }
  return (
    <div class='card text-left m-4' style={divStyle}>
      <div class='card-body p-0'>
      <div class='card-header'>Joe Schmoe</div>
        <div class='row pl-5 pt-2 pb-2 pr-5'>
          <div class='column mr-4'>
            <img src='avatars/1.jpg' class='img-fluid rounded-circle'/>
          </div>
          <div class='column ml-10 pl-10'>
            <p class='card-text font-weight-bold'>Questions Asked: 1</p>
            <p class='card-text font-weight-bold'>Questions Answered: 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
