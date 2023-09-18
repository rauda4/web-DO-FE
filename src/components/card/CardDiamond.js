import React from 'react';

export default function CardDiamond({ ImgDiamond, diamond, price }) {
  return (
    <button className='card md:w-44 w-60 cursor-pointer hover:bg-sky-700 focus:bg-sky-800 text-white bg-neutral-800 border glass shadow-xl'>
      <figure className='bg-yellow-400 py-4 md:px-10 px-20 glass'>
        <img
          src={ImgDiamond}
          style={{ height: 80, width: 100 }}
          alt='diamond'
        />
      </figure>
      <div className='card-body'>
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
