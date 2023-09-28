export default function Page({ bankName, accountNumber, image }) {
  return (
    <div className='flex w-full flex-col space-y-6 '>
      {/* Bank BCA */}
      <button className='card cursor-pointer flex-row justify-between p-4 border-2 border-slate-600 hover:bg-slate-900 focus:bg-slate-800'>
        <div className='flex space-x-8'>
          <div className='rounded-md bg-layer-3 px-5 py-3 flex items-center bg-white'>
            <img
              src={image}
              style={{ height: 36, width: 96 }}
              alt='bca'
            />
          </div>
          <div className='mt-2'>
            <h3 className='text-white font-semibold text-heading text-start uppercase '>
              {bankName}
            </h3>
            <div className='text-sm text-white text-start'>{accountNumber}</div>
          </div>
        </div>
      </button>
    </div>
  );
}
