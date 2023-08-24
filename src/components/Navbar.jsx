// import React from 'react'
// import image from '../assets/banner3.jpg'
// import logo from '../assets/do.png'

import { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/fontawesome-free';

export const Navbar = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    // <div class="w-screen h-screen">
    //     <div
    //         class="absolute inset-0 bg-cover bg-center">
    //             <img src={image} alt='banner1' className="w-full"/>
    //     </div>
    //     <div class="relative" id="relative">
    //         <header>
    //         <div class="sm:px-12 mx-auto flex items-center justify-between p-4 shadow-2xl bg-black bg-opacity-30">
    //             <div class="flex items-center space-x-2">
    //             <button>
    //                 <img src={logo} alt="Logo" class="w-12"/>
    //             </button>
    //             </div>
    //             <nav class="flex items-center space-x-1 text-sm font-medium text-gray-800">
    //             <button class="rounded bg-red-600 px-3 py-2 text-white transition hover:bg-red-700"> Sign Up </button>
    //             </nav>
    //         </div>
    //         </header>
    //     </div>
    // </div>
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
              "text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
          >
            Tailwind Starter Kit
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
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"
              >
                Docs
              </a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
              <button
                className={
                  "bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                }
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <i className="fas fa-arrow-alt-circle-down"></i> Download
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
