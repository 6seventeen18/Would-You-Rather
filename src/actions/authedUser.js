import { showLoading, hideLoading } from 'react-redux-loading-bar'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function handleLoginUser (userId) {
  return (dispatch) => {
    return dispatch(setAuthedUser(userId))
  }
}
