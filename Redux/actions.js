import axios from 'axios'
import { getUsersReducer } from './reducers'

export const GET_USERS_REQUEST = 'GET_USERS_REQUEST'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE'

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  }
}

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users
  }
}

export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error
  }
}

export const getUsers = () => {
  return function (dispatch) {
    dispatch(getUsersRequest())
    axios.get('http://localhost:5000/users')
    .then((res) => {
      console.log('action getUsers res: ', res)
      const users = res.data
      dispatch(getUsersSuccess(users))
    })
    .catch(err => {
      dispatch(getUsersFailure(err.message))
    })
  }
}