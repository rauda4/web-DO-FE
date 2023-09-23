import bca from '../../assets/payment/bca.png';
// import dana from '../../assets/payment/dana.png';

export default function Page({ bankName, accountNumber }) {
  return (
    <div className='flex w-full flex-col space-y-6 '>
      {/* Bank BCA */}
      <button className='card cursor-pointer flex-row justify-between rounded-xl p-4 border-2 border-slate-600 hover:bg-slate-900 focus:bg-slate-800'>
        <div className='flex space-x-8'>
          <div className='rounded-xl bg-layer-3 px-5 flex items-center'>
            <img
              src={bca}
              style={{ height: 36, width: 96 }}
              alt='bca'
            />
          </div>
          <div>
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
