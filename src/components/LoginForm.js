import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSetAuthedUser } from '../actions/authedUser'
import { NavLink } from 'react-router-dom'

class LoginForm extends Component {
  handleSelectUser = (e) => {
    const selectedIndex = document.getElementById('userSelect').selectedIndex
    const userId = document.getElementById('userSelect').options[selectedIndex].value
    const { dispatch } = this.props

    if (userId === '') {
      return
    } else {
      dispatch(handleSetAuthedUser(userId))
    }
  }

  render () {
    const { users } = this.props

    const userIds = Object.keys(users).sort((a,b) => users[a].name > users[b].name)
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm'></div>
          <div className='col-sm'>
            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">Please select a user to log in:</label>
                <select className="form-control" id="userSelect" onChange={this.handleSelectUser}>
                  <option value=''></option>
                  { userIds.map((userId) => (
                    <option key={userId} value={userId}>{users[userId].name}</option>
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
