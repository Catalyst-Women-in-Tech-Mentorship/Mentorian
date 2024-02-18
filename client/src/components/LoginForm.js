import React, { useState } from 'react';
import { loginUser } from '../api/ApiServices';
import "./LoginFormStyles.css";
import { FaLock, FaUser } from "react-icons/fa";


const LoginForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const { username, password } = formData;

    const onChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const userData = { username, password };
            const token = await loginUser(userData);
            console.log(token);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='wrapper'>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <div className='input-box'>
                    <input type='text' name='username' value={username} onChange={onChange} placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type='password' name='password' value={password} onChange={onChange} placeholder='Password' required />
                    <FaLock className='icon' />
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                    <a href='#'>Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className='register-link'>
                    <p>Don't have an account? <a href='#'>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
