import React, { useState } from 'react';
import { registerUser } from '../api/ApiServices';
import "./LoginFormStyles.css";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formData;

    const onChange = e => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const userData = { username, email, password };
            const response = await registerUser(userData);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={onSubmit}>
                <h1>Registration</h1>
                <div className='input-box'>
                    <input type='text' name='username' value={username} onChange={onChange} placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='email' name='email' value={email} onChange={onChange} placeholder='Email' required />
                    <FaEnvelope className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' name='password' value={password} onChange={onChange} placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                </div>
                <button type='submit'>Register</button>
                <div className='register-link'>
                    <p>Already have an account? <a href='#'>Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
