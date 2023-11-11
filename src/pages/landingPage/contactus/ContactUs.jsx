import React from 'react';
import CardContactUs from '../../../components/card/CardContactUs';
import Navbar from '../../../components/Navbar';

export default function ContactUs() {
  return (
    <>
      {/* section contact us */}
      <Navbar
        transparent
        tittle={'text-white '}
        textmain={'lg:text-white lg:hover:text-gray-300 text-gray-800 '}
        textauth={'lg:text-white lg:hover:text-gray-300 text-gray-800 '}
        colorcollapse={'text-white'}
      />
      <div className='bg-neutral-800 py-9'></div>
      <CardContactUs />
    </>
  );
}
