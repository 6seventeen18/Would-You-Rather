import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <div class='container'>
      <div class='row'>
        <div class='col-sm'></div>
        <div class='col-sm'>
          <form>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Please select a user to log in:</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
          </form>
        </div>
        <div class='col-sm'></div>
      </div>
    </div>
  )
}
