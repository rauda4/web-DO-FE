import React from 'react';

export default function CardModalSubmit({ onSubmit }) {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor='my_modal_6'
        className='text-white btn bg-blue-500 border-none ml-72 mt-8 hover:text-black'>
        Submit Modal
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id='my_modal_6'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          {/* body modal */}
          <div className='w-full rounded-xl bg-layer-2 px-8 py-6'>
            <h3 className='text-lg font-semibold text-heading'>
              Transfer Details
            </h3>

            <dl className='mt-4 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>Zone Id</dt>
                <dd className='text-sm font-semibold text-heading'>
                  291092032
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>Server Id</dt>
                <dd className='text-sm font-semibold text-heading'>2253</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>
                  Total Diamond
                </dt>
                <dd className='text-lg font-semibold text-heading'>
                  86 Diamond
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>Total Price</dt>
                <dd className='text-lg font-semibold text-heading'>
                  Rp 20.000
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>
                  Payment Method
                </dt>
                <dd className='text-lg font-semibold text-heading'>BCA</dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>Expired in</dt>
                <dd className='text-sm font-semibold text-heading'>5 min</dd>
              </div>
            </dl>
          </div>

          {/* modal for close and confirm */}
          <div className='modal-action'>
            <label
              htmlFor='my_modal_6'
              className='btn bg-slate-400'>
              Close!
            </label>
            <div
              className='btn bg-blue-900 text-white hover:text-black'
              onSubmit={onSubmit}>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
