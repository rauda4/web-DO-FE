import { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ tittle, textmain, textauth, colorcollapse }) {
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
    <div>
      <nav className='absolute z-50 w-full flex justify-between py-3'>
        <div className='container px-20 mx-auto flex flex-wrap items-center '>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <a
              className={
                'font-bold text-lg leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize ' +
                tittle
              }
              href='/'>
              divine owns
            </a>
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}>
              <i className={colorcollapse}>=</i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'>
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              <li className='flex items-center'>
                <a
                  className={
                    'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ' +
                    textmain
                  }
                  href='/product'>
                  Product
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className={
                    'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ' +
                    textmain
                  }
                  href='/mobile-legends'>
                  Diamond
                </a>
              </li>
              <li className='flex items-center'>
                <a
                  className={
                    'px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold ' +
                    textmain
                  }
                  href='/contact-us'>
                  contact us
                </a>
              </li>
            </ul>
            <ul>
              <li>
                {!isUserLoggedIn ? (
                  <a
                    href='/auth/login'
                    className={
                      'px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold ' +
                      textauth
                    }>
                    login{' '}
                  </a>
                ) : (
                  <div
                    className={
                      'px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold ' +
                      textauth
                    }>
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
      </nav>
    </div>
  );
}
