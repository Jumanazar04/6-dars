import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://test-ecommerce-gamma.vercel.app/auth ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        history.push('/home');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className='w-screen h-screen bg-gray-200 flex items-center justify-center'>
        <div className='p-6 bg-white text-center'>
        <h2 className='text-2xl font-bold mb-4'>Login</h2>
        <form className='flex gap-4 flex-col' onSubmit={handleLogin}>
            <div className='flex justify-between gap-4 items-center'>
            <label>Username:</label>
            <input
                className='p-2 border rounded-lg bg-gray-100'
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            </div>
            <div className='flex justify-between gap-4 items-center'>
            <label>Password:</label>
            <input
                className='p-2 border rounded-lg bg-gray-100'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button className='border rounded-lg p-2 bg-blue-600 text-white' type="submit">Login</button>
        </form>
        </div>
    </div>
  );
};

export default Login;
