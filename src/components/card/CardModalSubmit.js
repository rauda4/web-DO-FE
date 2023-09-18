import React from 'react';

export default function CardModalSubmit() {
  const data_beli = localStorage.getItem('purchase');
  const data = JSON.parse(data_beli);
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor='my_modal_6'
        className='text-white btn bg-blue-500 border-none ml-72 mt-8 hover:text-black'>
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id='my_modal_6'
        className='modal-toggle'
      />
      <div className='modal '>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Hello!</h3>
          hello
          <div className='modal-action'>
            <label
              htmlFor='my_modal_6'
              className='btn'>
              Close!
            </label>
            <a
              className='btn bg-blue-400'
              href='/'>
              Confirm
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
