import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertError from '../components/AlertError';

export default function FormLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/login',
        payload,
      );
      console.log(response);
      const accesToken = response.data.token;
      if (response.data.auth === true) {
        localStorage.setItem('token', accesToken);
        const userAccount = jwtDecode(accesToken);
        localStorage.setItem('userId', userAccount.id);
        localStorage.setItem('username', userAccount.username);
        navigate('/');
      } else {
        setError(response.data.msg);
      }
      console.log(response);
    } catch (error) {
      setError(error.response.data.msg);
      console.log(error.response.data.msg);
    }
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'></div>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body my-5'>
            {error && <AlertError message={error} />}
            <form onSubmit={handleSubmit}>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Username'
                  className='input input-bordered'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='password'
                  className='input input-bordered'
                  name='username'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='form-control mt-4'>
                <button className='btn btn-primary'>Login</button>
                <label className='label flex justify-center'>
                  {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                  <a
                    href='/auth/register'
                    className='label-text-alt link link-hover text-blue-800'>
                    Don't Have an Account ? Register Now
                  </a>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
