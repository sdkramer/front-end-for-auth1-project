import React from 'react';
import styles from '../styles/Home.module.css'

function NavBar(props) {
  return (
    <div>
      <nav className='navDiv'>
        <div className='titleDiv'>
        <h3>Welcome to THE APP</h3>
        </div>
        <div className='anchorDiv'>
        <a href='/signUp'>Sign Up</a>
        <a href='/login'>Login</a>
        <a href='/users'>Users</a>
        <a href='/logout'>Logout</a>
        </div>
        
       
      </nav>
    </div>
  );
}

export default NavBar;