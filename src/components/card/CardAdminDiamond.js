import React from 'react';
import CardAddDiamond from './CardAdminAddDiamond';
import CardTableDiamond from './CardTableDiamond';

// components

export default function CardHandleDiamond() {
  return (
    <>
      <div className='overflow-x-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg'>
        <div className='flex space-x-4 items-center bg-sky-900 justify-between px-10'>
          <p className='mb-5 mt-5 font-semibold text-white'>Data Diamond</p>
          <CardAddDiamond />
        </div>
        <CardTableDiamond />
      </div>
    </>
  );
}
