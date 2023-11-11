import React, { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Navbar2() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const isUserLoggedIn = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout action
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <div className='bg-transparent'>
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-4'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className='text-black text-lg font-bold leading-relaxed inline-block py-2 whitespace-nowrap uppercase'
            href='/'>
            divine owns
          </a>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}>
            <i className='text-black'>=</i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
          }>
          <div className='flex flex-col lg:flex-row list-none mr-auto gap-4'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='/product'>
                  Product
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='/mobile-legends'>
                  Diamond
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className='lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='/contact-us'>
                  contact us
                </a>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              {!isUserLoggedIn ? (
                <a
                  href='/auth/login'
                  className='lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold'>
                  login{' '}
                </a>
              ) : (
                <div className='lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold'>
                  {' '}
                  Hello, {username}
                  <BiLogOut
                    size={38}
                    color='white'
                    onClick={handleLogout}
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
