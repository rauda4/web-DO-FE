import Banner from '../../../components/carousel/Banner';
import Navbar from '../../../components/Navbar';
import Category from './Category';

export default function Product() {
  return (
    <>
      <div className='fixed top-0 left-0 right-0 '>
        <Navbar
          transparent
          tittle={'text-white '}
          textmain={'lg:text-white lg:hover:text-gray-300 text-gray-800 '}
          textauth={'lg:text-white lg:hover:text-gray-300 text-gray-800 '}
          colorcollapse={'text-white'}
        />
        <div className='bg-neutral-800 py-9'></div>
      </div>
      <div className='w-full min-h-screen py-24 bg-slate-100'>
        <div className='container mx-auto px-20'>
          <div className='mt-16'>
            <Banner />
            <div className='mt-10 bg-white'>
              <p className='py-6 ml-5 font-semibold text-xl'>Kategori</p>
              <Category />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
