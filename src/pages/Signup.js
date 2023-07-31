import React from 'react'
import '../styles/Signup.css'

function Signup() {
  return (
    <div className='signup'>
      <h1 className='signup-title'>Sign up</h1>
      <div className='forms-placement'>
        <form className='forms-container'>
          <div className='field'>
            <p>Username:</p>
            <input type='text' className='username'></input>
          </div>
          
          <div className='field'>
            <p>Password:</p>
            <input type='password' className='password' ></input>
          </div>

          <button className='sign-up'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Signup