import React, { useState } from 'react';
import style from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();
    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:9001/auth', {
                login: username,
                password: password
            });
            console.log(username, password);
            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const token = data.token;

            localStorage.setItem('token', token);

            navigate.push('/home');
        } catch (error) {
            console.error('Login error:', error.message);
        }
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
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <br />
                <button className={style.button} type="button">Login</button>
            </form>
        </div>
    );
};

export default Login;
