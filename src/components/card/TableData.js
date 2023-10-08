import React from 'react';

export default function TableData({ price }) {
  return (
    <>
      <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
        {price.toLocaleString('id-ID', {
          style: 'currency',
          currency: 'IDR',
          maximumFractionDigits: 0,
          minimumFractionDigits: 0
        })}
      </td>
    </>
  );
}
