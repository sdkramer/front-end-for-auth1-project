import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import {getUsers} from '../Redux/actions'

function users(props) {
  console.log('users props: ', props)
  const users = props.users
// const initialState = []

// const [users, setUsers] = useState(initialState)

// const getUsers = () => {
//   axios.get('http://localhost:5000/users')
//   .then((res) => {
//     setUsers(res.data)
//   })
//   .catch((err) => console.log(err))
// }

useEffect(() => {
props.getUsers()
}, [])

  return (
    <div className='formContainer'>
      <div className='formDiv'>
        <h2>List of users:</h2>
      {users.map(user => 
        <div className='userDiv' key={user.user_id}>{user.username}</div>)}
      </div>
  
      
    </div>
  );
}

const mapStateToProps = state => {
  console.log('users state: ', state)
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, {getUsers})(users);