import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertError from './AlertError';

export default function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        username,
        email,
        password
      };
      const response = await axios.post(
        'http://localhost:8080/auth/register',
        payload,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.status === 200) {
        navigate('/auth/login');
      }
    } catch (error) {
      setError(error.response.data.message);
      // console.log(error);
    }
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'></div>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            {error && <AlertError message={error} />}
            <form onSubmit={handleSubmit}>
              {/* section username */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Username</span>
                </label>
                <input
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className='input input-bordered'
                  required
                />
              </div>
              {/* section email */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input input-bordered'
                  required
                />
              </div>
              {/* section Password */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control mt-6'>
                <button className='btn btn-primary'>Sign Up</button>
                <label className='label justify-center'>
                  <a
                    href='/auth/login'
                    className='label-text-alt link link-hover text-blue-800'>
                    Already Have Account ? Login Now{' '}
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
