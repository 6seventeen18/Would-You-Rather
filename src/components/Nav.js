import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to='/home' exact className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/leaderboard' className="nav-link">Leader Board</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/add' className="nav-link">Add Question</NavLink>
            </li>
          </ul>
          <div className="navbar-brand">Signed in as [USERNAME]</div>
          <ul className="navbar-nav form-inline mt-2 mt-md-0">
            <li className="nav-item float-right">
              <NavLink className="nav-link" to='/'>Sign Out</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
