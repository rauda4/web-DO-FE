import Navbar from '../../../components/Navbar';

export default function Product() {
  return (
    <>
      <Navbar
        transparent
        tittle={
          'text-black text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
        }
        textmain={
          'lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
        }
        textauth={
          'lg:text-black lg:hover:text-gray-700 text-gray-800 px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold'
        }
      />
      <div className='bg-white py-9'></div>
      <div className='text-slate'>Product</div>
      <div className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-yellow-700'>
        Save changes
      </div>
      <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 focus:bg-yellow-700'>
        Save changes
      </button>
    </>
  );
}
