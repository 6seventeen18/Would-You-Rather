import React from 'react'

export default function UserStats () {
  return (
    <div class='card text-left mb-3'>
      <div class='card-header'>Joe Schmoe</div>
      <div class='card-body p-0'>
        <div class='row ml-0 mr-0'>
          <div class='column border-right p-3'>
            <img src='avatars/1.jpg' class='img-fluid rounded-circle'/>
          </div>
          <div class='column ml-3 p-3'>
            <p class='card-text font-weight-bold'>Questions Asked: 1</p>
            <p class='card-text font-weight-bold'>Questions Answered: 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
