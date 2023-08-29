import React from 'react';

export default function AlertError({ message }) {
  return (
    <div>
      <div role='alert'>
        <div className='border border-1 border-red-400 rounded-xl bg-red-100 px-4 py-3 text-red-700'>
          <p>{message} !!!</p>
        </div>
      </div>
    </div>
  );
}
