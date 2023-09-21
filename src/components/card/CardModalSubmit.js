import React from 'react';

export default function CardModalSubmit({ onSubmit }) {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor='my_modal_6'
        className='text-white btn bg-blue-500 border-none ml-72 mt-8 hover:text-black'>
        Submit
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
          hello {datauser}
          <div className='modal-action'>
            <label
              htmlFor='my_modal_6'
              className='btn'>
              Close!
            </label>
            <div
              className='btn bg-blue-400'
              onSubmit={onSubmit}>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
