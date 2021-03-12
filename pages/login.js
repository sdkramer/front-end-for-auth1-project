import React, { useState } from 'react'
import axios from 'axios'


function login(props) {

  const [successMessage, setSuccessMessage] = useState('')

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

const inputHandler = (e) => {
console.log('login e: ', e.target)

setFormData({
  ...formData,
  [e.target.name]: e.target.value
})
}

console.log('login successMessage: ', successMessage);

const onSubmitHandler = (e) => {
e.preventDefault()
console.log('login submit!');
axios.post('http://localhost:5000/auth/login', formData)
.then((res) => {
  console.log('login res: ', res.data.message )
  setSuccessMessage(res.data.message)
})
.catch(err => console.log(err))
}

// if(!successMessage){console.log('sm: ', successMessage)}
  return (
    <div className='formContainer'>
    <form className='formDiv' onSubmit={onSubmitHandler}>
        <h2>Login form:</h2>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' name='username' onChange={inputHandler}></input>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' name='password'onChange={inputHandler}/>
        <button>login</button>
        <br />
        <div>
       <h2>{successMessage}</h2>
     </div>
      </form>
     
      
    </div>
  );
}

export default login;