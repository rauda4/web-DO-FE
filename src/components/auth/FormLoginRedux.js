import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, reset } from '../../feature/auth/authSlice';
import Spinner from '../../components/utils/Spinner';
import AlertError from '../utils/AlertError';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export default function FormLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    document.title = 'Login';
    if (isError) {
      setError(message);
    }
    if (isSuccess) {
      navigate('/');
    }
    dispatch(reset());
  }, [isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      username,
      password,
    };
    dispatch(login(userData));
  };
  if (isLoading) {
    return <Spinner />;
  }

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
                  onChange={onChange}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder='password'
                  className='input input-bordered mt-2'
                  name='password'
                  value={password}
                  onChange={onChange}
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className='cursor-pointer ml-72 mt-16 absolute show-password'>
                  {showPassword ? <BsEye /> : <BsEyeSlash />}
                </div>
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
