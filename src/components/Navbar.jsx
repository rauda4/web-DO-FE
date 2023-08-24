// import React from 'react'
// import image from '../assets/banner3.jpg'
// import logo from '../assets/do.png'

import { useState } from "react";
import { BiSolidUserCircle } from "react-icons/bi";

// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

export const Navbar = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <div>
        <nav
      className={
        "absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              "text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="/"
          >
            divine owns
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className="text-white"
            >=</i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? " block rounded shadow-lg" : " hidden")
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/product"
              >
                Product
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/diamond"
              >
                Diamond
              </a>
            </li>
            <li className="flex items-center">
              <a
                className={
                  "lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                }
                href="/contactus"
              >
                contact us
              </a>
            </li>
          </ul>
          <ul>
            <li>
            <a href="/auth/login" className="w-full"><BiSolidUserCircle size={40} color="white" /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
