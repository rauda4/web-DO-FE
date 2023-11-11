/*eslint-disable*/
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { ListItem, ListItemPrefix } from '@material-tailwind/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function Sidebar() {
  const username = localStorage.getItem('username');
  const [collapseShow, setCollapseShow] = useState('hidden');
  const handleLogout = () => {
    // Perform logout action
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-96 mx-auto'>
          {/* Toggler */}
          <button
            className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}>
            <i className='fas fa-bars'>=</i>
          </button>
          {/* Brand */}
          <Link
            className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
            to='/'>
            Dashboard DO.Store
          </Link>
          {/* User */}
          <ul className='md:hidden items-center flex flex-wrap list-none'>
            <li className='inline-block relative'></li>
            <li className='inline-block relative'></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }>
            {/* Collapse header */}
            <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link
                    className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
                    to='/'>
                    Dashboard DO.Store
                  </Link>
                </div>
                <div className='w-6/12 flex justify-end'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => setCollapseShow('hidden')}>
                    <i className='fas fa-times'>
                      <AiOutlineClose />
                    </i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className='mt-6 mb-4 md:hidden'>
              <div className='mb-3 pt-0'>
                <input
                  type='text'
                  placeholder='Search'
                  className='border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal'
                />
              </div>
            </form>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
              <li className='items-center text-xs uppercase font-bold block '>
                <a href='/admin/dashboard'>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className='h-3 w-5'
                      />
                    </ListItemPrefix>
                    Dashboard
                  </ListItem>
                </a>
              </li>

              <li className='items-center text-xs uppercase font-bold block '>
                <a href='/admin/datadiamond'>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className='h-3 w-5'
                      />
                    </ListItemPrefix>
                    Diamond
                  </ListItem>
                </a>
              </li>

              <li className='items-center text-xs uppercase font-bold block '>
                <a href='/admin/dataproduct'>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className='h-3 w-5'
                      />
                    </ListItemPrefix>
                    Product
                  </ListItem>
                </a>
              </li>
            </ul>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
              <li className='items-center text-xs uppercase font-bold block '>
                <a href='/auth/login'>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className='h-3 w-5'
                      />
                    </ListItemPrefix>
                    Login
                  </ListItem>
                </a>
              </li>

              <li className='items-center text-xs uppercase font-bold block '>
                <a href='/auth/register'>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon
                        strokeWidth={3}
                        className='h-3 w-5'
                      />
                    </ListItemPrefix>
                    Register
                  </ListItem>
                </a>
              </li>
            </ul>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
              No Layout Pages
            </h6>
            {/* Navigation */}

            <ul className='md:flex-col md:min-w-full flex flex-col list-none md:mb-4'>
              <li className='items-center'>
                <Link
                  className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                  to='/landing'>
                  <i className='fas fa-newspaper text-blueGray-400 mr-2 text-sm'></i>{' '}
                  Landing Page
                </Link>
              </li>

              <li className='items-center'>
                <Link
                  className='text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block'
                  to='/profile'>
                  <i className='fas fa-user-circle text-blueGray-400 mr-2 text-sm'></i>{' '}
                  Profile Page
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            <ul>
              <li
                className='items-center text-xs uppercase font-bold block'
                onClick={handleLogout}>
                <ListItem>
                  <ListItemPrefix>
                    <BiLogOut />
                  </ListItemPrefix>
                  Logout from {username}
                </ListItem>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
