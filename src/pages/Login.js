import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

function Login() {
  return (
    <div className='login'>
      <h1 className='login-title'>Log In</h1>
      <div className='form-placement'>
        <form className='form-container'>
          <div className='field'>
            <p>Username:</p>
            <input type='text' className='username'></input>
          </div>
          
          <div className='field'>
            <p>Password:</p>
            <input type='password' className='password' ></input>
          </div>

          <button className='log-in'>Log In</button>
          <Link to='/sign-up'>Sign Up</Link>
        </form>
      </div>
    </div>
  )
}

export default Login