import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../../../components/form/FormInput';
import Navbar from '../../../components/Navbar';
import { mapProduct, reproduce } from '../../../config/getProduct';
import { getProduct } from '../../../feature/product/productSlice';
import { getDataProduct } from '../../../libs/api-libs';

export default function Testing() {
  const [search, setSearch] = useState('');
  const [datas, setDatas] = useState([]);
  const [gender, setGender] = useState('');
  const [gejala, setGejala] = useState('');

  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);
  const products = [...product];

  // find filter 1 product
  const dataProduct = async () => {
    let getData = await getDataProduct();
    getData = reproduce(getData, 2);
    setDatas(getData.data);
  };

  useEffect(() => {
    dispatch(getProduct());
    dataProduct();
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = {
      gender,
      gejala
    };
    console.log(formData);
  };

  const options = [
    { label: 'batuk', value: 'batuk' },
    { label: 'panas', value: 'panas' }
  ];

  return (
    <>
      <Navbar
        transparent
        tittle={'text-black '}
        textmain={'lg:text-black lg:hover:text-gray-700 text-gray-800'}
        textauth={'lg:text-black lg:hover:text-gray-700 text-gray-800 '}
      />
      <div className='bg-sky-300 w-full'>
        <div className='py-16 container mx-auto px-4'>
          {/* <Navbar2 /> */}
          <section className='mt-10'>
            <FormInput
              onSubmit={(e) => e.preventDefault()}
              type={'text'}
              placeholder={'Search'}
              onChange={(e) => setSearch(e.target.value)}
              className={'input input-bordered w-24 md:w-auto'}
            />
            <div className='text-2xl mb-2 font-semibold mt-5'>Products</div>
            <div className='capitalize'>{mapProduct(products, search)}</div>
          </section>
          <br />
          <section>
            <div className='text-2xl mb-2 font-semibold'>Rekomendasi</div>
            {mapProduct(datas, search)}
          </section>

          <section>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* form Gender */}
              <div className='text-2xl py-2 mt-5'>Gender</div>
              <div className='flex gap-2 '>
                <input
                  type='radio'
                  name='gender'
                  value='male'
                  id='male'
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='male'>Male</label>
              </div>
              <div className='flex gap-2'>
                <input
                  type='radio'
                  name='gender'
                  value='female'
                  id='female'
                  onChange={(e) => setGender(e.target.value)}
                />
                <label htmlFor='female'>Female</label>
              </div>

              <div className='mt-5'>
                <label
                  htmlFor='gejala'
                  className='mr-2'>
                  Gejala :
                </label>

                <select
                  id='gejala'
                  className='select select-bordered w-full max-w-xs'
                  onChange={(e) => setGejala(e.target.value)}>
                  {options.map((option) => {
                    return (
                      <option
                        value={option.value}
                        key={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
              </div>
            </form>
            <button
              className='btn mt-4 bg-blue-600 border-none'
              onClick={onSubmit}>
              Submit
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
