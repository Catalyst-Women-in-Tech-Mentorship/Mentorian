import React from 'react'
import "./LoginFormStyles.css"
import {FaEnvelope, FaLock, FaUser} from "react-icons/fa"
const RegistrationForm = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Registration</h1>
            <div className='input-box'>
                <input type='text' placeholder='Username' required/>
            <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type='email' placeholder='Email' required/>
            <FaEnvelope className='icon'/>
            </div>
            <div className='input-box'> 
                <input type='password' placeholder='Password' required/>
            <FaLock className='icon'/>
            </div>
            <div className='remember-forgot'>
                <label><input type='checkbox'/>Remember me</label>
            </div>
            <button type='submit'>Register</button>
            <div className='register-link'>
                <p>Already have an account? <a href='#'>Login</a></p>
            </div>
        </form>
    </div>
  )
}

export default RegistrationForm