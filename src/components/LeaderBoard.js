import React from 'react'
import UserStats from './UserStats'

export default function LeaderBoard () {
  return (
    <div class='container text-center'>
    <h1 class="h3 mb-3 font-weight-normal">Leader Board</h1>
      <div class='row'>
        <div class='col'></div>
        <div class='col-8'>
          <div class="jumbotron pt-4 pb-4">
            <UserStats />
            <UserStats />
            <UserStats />
          </div>
        </div>
        <div class='col'></div>
      </div>
    </div>
  )
}
