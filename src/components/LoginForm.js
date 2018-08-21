import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

class LoginForm extends Component {
  render () {
    const { users } = this.props
    debugger
    const userIds = Object.keys(users).sort((a,b) => users[a].name > users[b].name)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm'></div>
          <div className='col-sm'>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Please select a user to log in:</label>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option value='0'></option>
                  { userIds.map((userId) => (
                    <option value={userId}>{users[userId].name}</option>
                  )) }
                </select>
              </div>
            </form>
          </div>
          <div className='col-sm'></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({users}, props) {
  return {
    users
  }
}

export default connect(mapStateToProps)(LoginForm)
