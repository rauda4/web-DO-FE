import React from 'react';

export default function CardModalSubmit({
  onClick,
  gameId,
  serverId,
  totalDiamond,
  price,
  payment
}) {
  return (
    <>
      {/* The button to open modal */}
      <label
        htmlFor='my_modal_6'
        className='ml-64 text-white btn bg-blue-500 border-none mt-8 hover:text-black'>
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
              Transaction Details
            </h3>

            <dl className='mt-4 space-y-4'>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>Id Server</dt>
                <dd className='text-md font-semibold text-heading'>
                  {gameId} ({serverId})
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>
                  Total Diamond
                </dt>
                <dd className='text-lg font-semibold text-heading'>
                  {totalDiamond}
                </dd>
              </div>

              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>
                  Payment Method
                </dt>
                <dd className='text-lg font-semibold text-heading uppercase'>
                  {payment}
                </dd>
              </div>
              <div className='flex items-center justify-between'>
                <dt className='text-sm font-semibold text-text'>Total Price</dt>
                <dd className='text-lg font-semibold text-heading'>
                  {price.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumFractionDigits: 0,
                    minimumFractionDigits: 0
                  })}
                </dd>
              </div>
            </dl>
          </div>

          {/* modal for close and confirm */}
          <div className='modal-action'>
            <label
              htmlFor='my_modal_6'
              className='btn bg-slate-300 hover:bg-slate-400 rounded-full drop-shadow-lg'>
              Close!
            </label>
            <div
              className='btn bg-blue-500 text-white hover:bg-blue-600 rounded-full drop-shadow-xl'
              onClick={onClick}>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
