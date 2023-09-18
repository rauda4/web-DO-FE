import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dm from '../../../assets/diamond.png';
import CardDescDiamond from '../../../components/card/CardDescDiamond';
import CardDiamond from '../../../components/card/CardDiamond';
import Navbar from '../../../components/Navbar';
import {
  diamondSelector,
  getDiamonds
} from '../../../feature/diamonds/diamondSlice';
import { Tooltip } from '@material-tailwind/react';
import CardModalSubmit from '../../../components/card/CardModalSubmit';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export default function Diamond() {
  const dispatch = useDispatch();
  const diamond = useSelector(diamondSelector.selectAll);
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    gameId: '',
    zoneId: ''
  });
  const { gameId, zoneId } = formData;
  const data = cart.purchase;

  // const navigate = useNavigate()
  useEffect(() => {
    dispatch(getDiamonds());
  }, [dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddToCart = (purchase) => {
    setCart({ purchase, formData });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = cart;
    localStorage.setItem('purchase', JSON.stringify(data));
    // try {
    //   const payload = {
    //     gameId,
    //     zoneId,
    //     diamond: cart
    //   };
    //   const response = await axios.post(
    //     'http://localhost:8080/auth/register',
    //     payload,
    //     {
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
    //     }
    //   );
    //   if (response.status === 200) {
    //     navigate('/auth/login');
    //   }
    // } catch (error) {
    //   // setError(error.response.data.message);
    //   console.log(error);
    // }
  };

  return (
    <>
      <Navbar
        transparent
        tittle={
          'text-white text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
        }
        textmain={
          'lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
        }
        textauth={
          'lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold'
        }
        colorcollapse={'text-white'}
      />
      <div className='bg-neutral-900 py-9'></div>
      <div className='bg-neutral-800 min-h-screen py-24'>
        {/* deskripsi */}
        <div className='md:flex justify-center gap-10'>
          <section>
            <CardDescDiamond />
          </section>

          <section>
            <form onSubmit={handleSubmit}>
              {/* input user id */}
              {/* user id */}
              <div className='lg:flex bg-neutral-900 rounded-xl mb-10 py-10 px-10 grid gap-4 grid-cols-3'>
                <h1 className='flex justify-center ml-10 bg-neutral-700 border-8 border-neutral-900 rounded-xl font-normal text-white absolute -mt-16 -ml-2 px-6 py-2'>
                  Masukkan User ID
                </h1>
                <div className='form-control'>
                  <label className='label'></label>
                  <input
                    type='number'
                    placeholder='Masukkan user Id'
                    name='gameId'
                    value={gameId}
                    onChange={onChange}
                    className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none '
                    required
                  />
                </div>
                {/* id server*/}
                <div className='form-control'>
                  <label className='label'></label>
                  <input
                    type='number'
                    placeholder='Id server'
                    name='zoneId'
                    value={zoneId}
                    onChange={onChange}
                    className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
                    required
                  />
                </div>
                {/* tooltip*/}
                <div>
                  <Tooltip content='Example 222553 (2253)'>
                    <div className='bg-white w-6 text-center font-bold color-white rounded-full cursor-default mt-7'>
                      ?
                    </div>
                  </Tooltip>
                </div>
              </div>

              {/* price list diamond */}
              <div className='bg-neutral-900 rounded-xl mb-10'>
                <h1 className='flex justify-center ml-10 bg-neutral-700 border-8 border-neutral-900 rounded-xl font-normal text-white absolute -mt-5 lg:ml-8 ml-5 px-6 py-2'>
                  Pilih Nominal Top Up
                </h1>
                <div className='flex-row justify-items-center grid gap-x-10 gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-16 px-10'>
                  {diamond.map((item) => {
                    return (
                      <div
                        onClick={() =>
                          handleAddToCart({
                            diamond: item.name,
                            price: item.price
                          })
                        }
                        key={item.id}>
                        <CardDiamond
                          ImgDiamond={dm}
                          diamond={item.name}
                          price={item.price.toLocaleString('id-ID', {
                            style: 'currency',
                            currency: 'IDR'
                          })}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* payment list */}
              <div className='bg-neutral-900 rounded-xl'>
                <h1 className='flex justify-center ml-10 bg-neutral-700 border-8 border-neutral-900 rounded-xl font-normal text-white absolute -mt-5 lg:ml-8 ml-5 px-6 py-2'>
                  Pilih pembayaran
                </h1>
                <div className='flex-row justify-items-center grid gap-x-10 gap-y-10 lg:grid-cols-1 py-16 px-10'></div>
              </div>

              {/* handle submit */}
              <button>
                <CardModalSubmit />
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
