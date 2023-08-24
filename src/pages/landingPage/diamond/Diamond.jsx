import React, { useState } from 'react';
import dm from '../../../assets/diamond.png';
import { useEffect } from 'react';
import axios from 'axios';

export default function Diamond() {
  const [diamond, setDiamond] = useState([]);

  const getDiamond = async () => {
    const response = await axios.get('http://localhost:8080/diamond');
    setDiamond(response.data.data);
  };
  useEffect(() => {
    getDiamond();
  }, []);

  console.log(diamond);

  return (
    <>
      <div className='bg-indigo-950 py-9'></div>
      <div className='bg-indigo-950 flex justify-center'>
        {/* <div> */}
        <div className='grid gap-x-10 gap-y-10 grid-cols-6 my-20'>
          {diamond.map((item) => {
            return (
              <div className='card w-54 bg-white shadow-xl'>
                <figure className='bg-yellow-500 py-5 glass'>
                  <img
                    src={dm}
                    style={{ height: 80, width: 100 }}
                    alt='diamond'
                  />
                </figure>
                <div className='card-body'>
                  <h2 className='text-lg font-medium'>{item.name}</h2>
                  <p className='text-lg'>
                    {item.price.toLocaleString('id-ID', {
                      style: 'currency',
                      currency: 'IDR',
                    })}
                  </p>
                  <div className='card-actions justify-end'></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
