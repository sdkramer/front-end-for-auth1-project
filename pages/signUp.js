import React, { useState } from 'react';
import axios from 'axios'

function signUp(props) {
const [formData, setFormData] = useState({
  username: '',
  password: ''
})

const inputHandler = (e) => {
setFormData({
  ...formData,
  [e.target.name]: e.target.value
})
}

// console.log('formData: ', formData);

const handleSubmit = (e) => {
  e.preventDefault();
  axios.post('http://localhost:5000/users', formData)
  .then((res) => {
    console.log('signup res: ', res)
  })
  .catch(err => console.log(err))
}

  return (
    <div className='formContainer'>
      <form className='formDiv' onSubmit={handleSubmit}>
        <h2>Sign up form:</h2>
        <label htmlFor='username'>Username</label>
        <input type='text' name='username' id='username' onChange={inputHandler}></input>
        <label htmlFor='password'>Password</label>
        <input id='password' name='password' onChange={inputHandler} />
        <button>sign up</button>
      </form>
      
    </div>
  );
}

export default signUp;