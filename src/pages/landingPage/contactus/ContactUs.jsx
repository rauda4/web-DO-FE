import React from 'react';
import CardContactUs from '../../../components/card/CardContactUs';
import Navbar from '../../../components/Navbar';

export default function ContactUs() {
  return (
    <>
      {/* section contact us */}
      <Navbar
        transparent
        tittle={
          'text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
        }
        textmain={
          'lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
        }
        textauth={
          'lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold'
        }
        colorcollapse={'text-white'}
      />
      <div className='bg-neutral-800 py-9'></div>
      <CardContactUs />
    </>
  );
}
