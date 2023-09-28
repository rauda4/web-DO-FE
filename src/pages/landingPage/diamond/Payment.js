import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Payment() {
  const [token, setToken] = useState('');
  const [formData, setFormData] = useState({
    price: '',
    gameId: '',
    serverId: '',
    nameDiamond: '',
    payment: ''
  });

  const { price, gameId, serverId, payment, nameDiamond } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const process = async (e) => {
    e.preventDefault();
    const data = {
      gameId,
      serverId,
      price,
      nameDiamond,
      payment
    };

    const response = await axios.post(
      'http://localhost:8080/payment/process-transaction',
      data
    );
    console.log(response.data.transaction.token);
    setToken(response.data.transaction.token);
  };

  useEffect(() => {
    if (token) {
      window.snap.pay(token, {
        onSuccess: (result) => {
          localStorage.setItem('pembayaran berhasil', JSON.stringify(result));
          console.log(result);
          setToken('');
        },
        onPending: (result) => {
          localStorage.setItem('pembayaran pending', JSON.stringify(result));
          setToken('');
        },
        onError: (result) => {
          localStorage.setItem('pembayaran error', JSON.stringify(result));
          setToken('');
        },
        onClose: () => {
          console.log('Anda belum menyelesaikan pembayaran');
          setToken('');
        }
      });
      setFormData('');
    }
  }, [token]);

  useEffect(() => {
    const midtransUrl = 'https://app.sandbox.midtrans.com/snap/snap.js';
    let scriptTag = document.createElement('script');
    scriptTag.src = midtransUrl;

    const midtransClientKey = 'SB-Mid-client-sfcdc2kuWwaINvTz';
    scriptTag.setAttribute('data-client-key', midtransClientKey);
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <section>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'></div>
          <div className='card flex-shrink-0 w-screen max-w-sm shadow-2xl bg-base-100'>
            <div className='card-body my-5'>
              <form onSubmit={process}>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>game Id</span>
                  </label>
                  <input
                    type='text'
                    placeholder='gameId'
                    className='input input-bordered'
                    name='gameId'
                    value={gameId}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Server Id</span>
                  </label>
                  <input
                    type='text'
                    placeholder='serverId'
                    className='input input-bordered'
                    name='serverId'
                    value={serverId}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>payment</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Payment'
                    className='input input-bordered'
                    name='payment'
                    value={payment}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Name Diamond</span>
                  </label>
                  <input
                    type='text'
                    placeholder='price'
                    className='input input-bordered'
                    name='nameDiamond'
                    value={nameDiamond}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-control'>
                  <label className='label'>
                    <span className='label-text'>Price</span>
                  </label>
                  <input
                    type='text'
                    placeholder='price'
                    className='input input-bordered'
                    name='price'
                    value={price}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-control mt-4'>
                  <button className='btn btn-primary'>Submit</button>
                  <label className='label flex justify-center'></label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
