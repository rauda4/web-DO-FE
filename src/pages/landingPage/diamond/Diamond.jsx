import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dm from '../../../assets/diamond.png';
import CardDescDiamond from '../../../components/card/CardDescDiamond';
import CardDiamond from '../../../components/card/CardDiamond';
import CardPayment from '../../../components/card/CardPayment';
import Navbar from '../../../components/Navbar';
import {
  diamondSelector,
  getDiamonds
} from '../../../feature/diamonds/diamondSlice';
import { Tooltip } from '@material-tailwind/react';
import CardModalSubmit from '../../../components/card/CardModalSubmit';
import bca from '../../../assets/payment/bca.png';
import axios from 'axios';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

export default function Diamond() {
  const dispatch = useDispatch();
  const diamond = useSelector(diamondSelector.selectAll);
  const [cartDiamond, setCartDiamond] = useState({});
  const [payment, setPayment] = useState([]);
  const [formData, setFormData] = useState({
    gameId: '',
    serverId: ''
  });
  const { gameId, serverId } = formData;
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

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      const purhcaseHistory = {
        gameId,
        serverId,
        price: cartDiamond.price,
        nameDiamond: cartDiamond.name,
        payment: payment.bank
      };
      const response = await axios.post(
        'http://localhost:8080/payment/process-transaction',
        purhcaseHistory
      );
      if (response.status === 200) {
        const url = response.data.transaction.redirect_url;
        window.location.href = url;
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const listPpayments = [
    {
      id: '1',
      bankName: 'bca',
      accountNumber: '7180333619'
    },
    {
      id: '2',
      bankName: 'Ovo',
      accountNumber: '081298538812'
    },
    {
      id: '3',
      bankName: 'Gopay',
      accountNumber: '081298538812'
    }
  ];

  return (
    <>
      <div className='fixed top-0 left-0 right-0'>
        <Navbar
          transparent
          tittle={'text-white '}
          textmain={'lg:text-white lg:hover:text-gray-300 text-gray-800 '}
          textauth={
            'lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 lg:py-2 py-3 flex cursor-pointer items-center gap-5 text-xs uppercase font-bold'
          }
          colorcollapse={'text-white'}
        />
        <div className='bg-neutral-900 py-9'></div>
      </div>
      <div className='bg-neutral-800 min-h-screen py-24'>
        {/* deskripsi */}
        <div className='md:flex justify-center gap-10'>
          <section>
            <CardDescDiamond />
          </section>

          <section>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* input user id */}
              {/* user id */}
              <div className='bg-neutral-900 rounded-xl mb-10 py-10 px-10'>
                <div className='-mt-16'>
                  <h1 className='w-48 flex justify-center bg-neutral-700 border-8 border-neutral-900 rounded-xl font-normal text-white -ml-2 px-6 py-2'>
                    Masukkan User ID
                  </h1>
                </div>
                <div className='flex gap-4'>
                  <div className='form-control'>
                    <label className='label'></label>
                    <input
                      type='number'
                      placeholder='Masukkan user Id'
                      name='gameId'
                      value={gameId}
                      onChange={onChange}
                      className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none '
                    />
                  </div>
                  {/* id server*/}
                  <div className='form-control'>
                    <label className='label'></label>
                    <input
                      type='number'
                      placeholder='Id server'
                      name='serverId'
                      value={serverId}
                      onChange={onChange}
                      className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
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
              </div>

              {/* price list diamond */}

              <div className='bg-neutral-900 rounded-xl mb-10 py-10 px-10'>
                <div className='-mt-16 mb-10'>
                  <h1 className='w-48 flex justify-center bg-neutral-700 border-8 border-neutral-900 rounded-xl font-normal text-white -ml-2 px-6 py-2'>
                    Masukkan User ID
                  </h1>
                </div>
                <div className='flex-row justify-items-center grid gap-x-10 gap-y-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                  {diamond.map((item) => (
                    <div
                      onClick={() =>
                        setCartDiamond({
                          name: item.diamond_name,
                          price: item.diamond_price
                        })
                      }
                      key={item.diamond_id}>
                      <CardDiamond
                        ImgDiamond={dm}
                        diamond={item.diamond_name}
                        price={(item.diamond_price || 0).toLocaleString(
                          'id-ID',
                          {
                            style: 'currency',
                            currency: 'IDR',
                            maximumFractionDigits: 0,
                            minimumFractionDigits: 0
                          }
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* payment list */}
              <div className='bg-neutral-900 rounded-xl'>
                <h1 className='flex justify-center ml-10 bg-neutral-700 border-8 border-neutral-900 rounded-xl font-normal text-white absolute -mt-5 lg:ml-8 ml-5 px-6 py-2'>
                  Pilih pembayaran
                </h1>
                <div className='py-20 mx-10 space-y-6 '>
                  {listPpayments.map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        setPayment({
                          bank: item.bankName
                        })
                      }>
                      <CardPayment
                        image={bca}
                        bankName={item.bankName}
                        accountNumber={item.accountNumber}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* handle submit */}
              <button className='w-full'>
                <CardModalSubmit
                  serverId={serverId}
                  gameId={gameId}
                  price={cartDiamond.price || 0}
                  totalDiamond={cartDiamond.name}
                  payment={payment.bank}
                  onClick={handleAddToCart}
                />
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}
