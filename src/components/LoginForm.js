import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginForm () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-sm'></div>
        <div className='col-sm'>
          <form>
            <div className="form-group">
              <label for="exampleFormControlSelect1">Please select a user to log in:</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
        </div>
        <div className='col-sm'></div>
      </div>
    </div>
  )
}
