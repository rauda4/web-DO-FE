import axios from 'axios';
import React from 'react';
import { useState } from 'react';

export default function FormRegister() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const payload = {
    username,
    email,
    password,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8080/auth/register',
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log(response);
    } catch (error) {}
  };

  return (
    <div className='hero min-h-screen bg-base-200'>
      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left'></div>
        <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
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
                />
              </div>
              {/* section email */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='text'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='input input-bordered'
                />
              </div>
              {/* section Password */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='text'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='input input-bordered'
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
