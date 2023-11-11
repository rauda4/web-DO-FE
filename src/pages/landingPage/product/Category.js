import React from 'react';
import pulsa from '../../../assets/transaction/listrik.png';
import elektronik from '../../../assets/transaction/elektronik.png';
import komputer from '../../../assets/transaction/komputer.png';
import pria from '../../../assets/transaction/pria.png';
import wanita from '../../../assets/transaction/wanita.png';
import muslim from '../../../assets/transaction/muslim.png';
import anak from '../../../assets/transaction/anak.png';
import aksesoris from '../../../assets/transaction/aksesoris.png';
import stickPs from '../../../assets/transaction/stickPs.png';

export default function Category() {
  const transaction = [
    {
      id: 1,
      name: 'Pulsa & Tagihan',
      url: 'https://example.com/',
      image: pulsa
    },
    {
      id: 2,
      name: 'Elektronik',
      url: 'https://example.com/',
      image: elektronik
    },
    {
      id: 3,
      name: 'Komputer & Aksesoris',
      url: 'https://example.com/',
      image: komputer
    },
    { id: 4, name: 'Pakaian Pria', url: 'https://example.com/', image: pria },
    {
      id: 5,
      name: 'Pakaian Wanita',
      url: 'https://example.com/',
      image: wanita
    },
    {
      id: 6,
      name: 'Fashion Muslim',
      url: 'https://example.com/',
      image: muslim
    },
    {
      id: 7,
      name: 'Fashion Bayi & Anak',
      url: 'https://example.com/',
      image: anak
    },
    {
      id: 8,
      name: 'Aksesoris Fashion',
      url: 'https://example.com/',
      image: aksesoris
    },
    { id: 9, name: 'Voucher Game', url: '/mobile-legends', image: stickPs }
  ];
  return (
    <div className='grid grid-cols-9 text-center'>
      {transaction.map((item) => {
        return (
          <div
            className=' border'
            key={item.id}>
            <a href={item.url}>
              <button>
                <img
                  src={item.image}
                  style={{ width: 80, height: 100 }}
                  className='p-1 '
                  alt={item.image}
                />
              </button>
              <div className='p-2'>{item.name}</div>
            </a>
          </div>
        );
      })}
    </div>
  );
}
