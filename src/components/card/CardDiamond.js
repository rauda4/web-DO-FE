import React from 'react';

export default function CardDiamond({ ImgDiamond, diamond, price }) {
  return (
    <button className='md:w-44 w-60 cursor-pointer hover:bg-sky-700 focus:bg-sky-800 text-white bg-gradient-to-r from-neutral-500  border-none rounded-xl shadow-xl'>
      <figure className='bg-gradient-to-r from-yellow-500 to-white py-4 md:px-10 px-20 rounded-xl'>
        <img
          src={ImgDiamond}
          style={{ height: 80, width: 100 }}
          alt='diamond'
        />
      </figure>
      <div className='card-body '>
        <h2 className='font-medium'>{diamond}</h2>
        <p className=''>{price}</p>
        {/* // example for cart 
    <p className='text-md'>
      {(item.price * 2).toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
      })}
    </p> */}
      </div>
    </button>
  );
}
