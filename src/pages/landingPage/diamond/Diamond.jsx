import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dm from '../../../assets/diamond.png';
import CardDescDiamond from '../../../components/card/CardDescDiamond';
import CardDiamond from '../../../components/card/CardDiamond';
import Navbar from '../../../components/Navbar';
import {
  diamondSelector,
  getDiamonds
} from '../../../feature/diamonds/diamondSlice';

export default function Diamond() {
  const dispatch = useDispatch();
  const diamond = useSelector(diamondSelector.selectAll);
  useEffect(() => {
    dispatch(getDiamonds());
  }, [dispatch]);

  const handleClick = () => {
    const getData = diamond.map((item) => item.id);
    console.log('getData', getData);
  };

  return (
    <>
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
      <div className='bg-neutral-900 py-9'></div>
      <div className='bg-neutral-800 py-24'>
        {/* content */}
        <div className='flex justify-center gap-10'>
          <section>
            <CardDescDiamond />
          </section>

          <section>
            <div className='bg-neutral-900 rounded-xl'>
              <h1 className='flex justify-center ml-10 bg-neutral-700 border-8 border-neutral-900 rounded-xl font-medium text-white absolute -mt-5 w-32 py-1'>
                Diamond
              </h1>
              <div className='grid gap-x-10 gap-y-10 grid-cols-3 py-10 px-10'>
                {diamond.map((item) => {
                  return (
                    <form
                      onClick={handleClick}
                      key={item.id}>
                      <CardDiamond
                        ImgDiamond={dm}
                        diamond={item.name}
                        price={item.price.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR'
                        })}
                      />
                    </form>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
        <div className='text-white flex justify-center'></div>
      </div>
    </>
  );
}
