import React, { useEffect, useState } from 'react';
import { BsChevronRight, BsChevronLeft } from 'react-icons/bs';
import banner1 from '../../assets/product/adidas.webp';
import banner2 from '../../assets/product/shoesBanner.webp';
import banner3 from '../../assets/product/shoesBanner2.webp';

export default function Banner() {
  const [current, setCurrent] = useState(0);
  const slides = [
    {
      url: banner1
    },
    {
      url: banner2
    },
    {
      url: banner3
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (current === 2) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  const prevSlides = () => {
    const firstSlides = current === 0;
    const newIndex = firstSlides ? slides.length - 1 : current - 1;
    console.log(newIndex);
    setCurrent(newIndex);
  };
  const nextSlides = () => {
    const lastSlides = current === slides.length - 1;
    const newIndex = lastSlides ? 0 : current + 1;
    setCurrent(newIndex);
  };
  return (
    <div className='w-full h-full bg-center bg-cover group grid justify-items-stretch'>
      <div
        style={{
          backgroundImage: `url(${slides[current].url})`,
          height: 580,
          width: 1380
        }}
        className='duration-500 bg-center bg-cover justify-self-center'></div>
      <div className='flex justify-between text-black px-4'>
        <BsChevronLeft
          size={30}
          className='w-10 h-10 p-2 -mt-72 bg-white opacity-50 hover:opacity-100 rounded-full hidden group-hover:block cursor-pointer'
          onClick={prevSlides}
        />
        <BsChevronRight
          size={30}
          className='w-10 h-10 p-2 bg-white opacity-50 hover:opacity-100 rounded-full -mt-72 hidden group-hover:block cursor-pointer'
          onClick={nextSlides}
        />
      </div>
    </div>
  );
}
