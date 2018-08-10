import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink to='/home' exact className="nav-link">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/leaderboard' className="nav-link">Leader Board</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/add' className="nav-link">Add Question</NavLink>
            </li>
          </ul>
          <div class="navbar-brand">Signed in as [USERNAME]</div>
          <ul class="navbar-nav form-inline mt-2 mt-md-0">
            <li class="nav-item float-right">
              <NavLink className="nav-link" to='/'>Sign Out</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
