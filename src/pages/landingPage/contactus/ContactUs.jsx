import React from 'react';
import Navbar from '../../../components/Navbar';
import CardContactUs from '../../../components/card/CardContactUs';

export default function ContactUs() {
  return (
    <>
      <Navbar transparent />
      <div className='bg-current py-9'></div>
      {/* section contact us */}
      <CardContactUs />
    </>
  );
}
