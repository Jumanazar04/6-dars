// src/Login.js

import React, { useState } from 'react';
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'user' && password === 'test1234') {
            navigate('/home')
        } else {
            alert('Invalid username or password. Please try again.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={style.body}>
            <h2>Login</h2>
            <form className={style.form} onSubmit={handleLogin}>
                <label className='label'>Username:</label>
                <input
                    className={style.input}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <label className='label'>Password:</label>
                <div className={style.hideButton}>
                    <input
                        className={style.input}
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" className={style.b} onClick={togglePasswordVisibility}>
                        {showPassword ? 'Hide' : 'Show'} 
                    </button>
                </div>
                <br />
                <button className={style.button} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
