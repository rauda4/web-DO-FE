import React, { useState } from 'react';
import dm from '../../../assets/diamond.png';
import { useEffect } from 'react';
import axios from 'axios';

export default function Diamond() {
  const [diamond, setDiamond] = useState([]);

  useEffect(() => {
    const getDiamond = async () => {
      try {
        const response = await axios.get('http://localhost:8080/diamond');
        setDiamond(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDiamond()
  }, []);

  // console.log(diamond);

  return (
    <>
      <div className='bg-neutral-900 py-9'></div>
      <div className='bg-neutral-800 py-24'>
        {/* content */}
        <div className=''>
          <div className='flex justify-center gap-10'>
            <section>
              <div className='bg-neutral-900 rounded-xl'>
                <div className='w-96 py-10 px-10'>
                  <h1 className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </h1>
                </div>
              </div>
              <div className='bg-neutral-900 rounded-xl mt-5'>
                <div className='w-96 py-10 px-10'>
                  <h1 className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </h1>
                </div>
              </div>
            </section>

            <section>
              <div className='bg-neutral-900 rounded-xl'>
                <h1 className='flex justify-center ml-10 bg-sky-500 border-8 border-neutral-900 rounded-xl font-medium text-white absolute -mt-5 w-32 py-1'>Diamond</h1>
                <div className='grid gap-x-10 gap-y-10 grid-cols-3 py-10 px-10'>
                  {diamond.map((item) => {
                    return (
                      <div className='card w-44 cursor-pointer hover:bg-sky-700 text-white bg-neutral-800 border glass shadow-xl'>
                        <figure className='bg-yellow-400 py-2 glass'>
                          <img
                            src={dm}
                            style={{ height: 80, width: 100 }}
                            alt='diamond'
                          />
                        </figure>
                        <div className='card-body'>
                          <h2 className='font-medium'>{item.name}</h2>
                          <p className=''>
                            {item.price.toLocaleString('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            })}
                          </p>
                          {/* // example for cart 
                          <p className='text-md'>
                            {(item.price * 2).toLocaleString('id-ID', {
                              style: 'currency',
                              currency: 'IDR',
                            })}
                          </p> */}
                          
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='text-white flex justify-center'>
        </div>
      </div>
    </>
  );
}
