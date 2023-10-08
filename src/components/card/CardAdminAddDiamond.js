import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDiamond } from '../../feature/diamonds/diamondSlice';

export default function CardAddDiamond() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    diamond_name: '',
    diamond_price: '',
    diamond_stock: ''
  });

  const { diamond_name, diamond_price, diamond_stock } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      diamond_name,
      diamond_price,
      diamond_stock
    };
    await dispatch(addDiamond(data));
    window.location.reload();
  };
  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor='add_data'
        className='btn'>
        + Add New Data
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id='add_data'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <p className='font-bold text-xl text-center py-4'>ADD NEW DATA</p>
          {/* this is body */}
          <form
            className='space-y-4'
            onSubmit={(e) => e.preventDefault()}>
            <div className='form-control text-black'>
              <label className='label'>
                <span className='label-text text-black'>Diamond</span>
              </label>
              <input
                type='text'
                placeholder='Please Enter Diamond'
                name='diamond_name'
                value={diamond_name}
                onChange={onChange}
                className='input input-bordered'
                required
              />
            </div>

            <div className='form-control text-black'>
              <label className='label'>
                <span className='label-text text-black'>Price</span>
              </label>
              <input
                type='number'
                placeholder='Please Enter Price'
                name='diamond_price'
                value={diamond_price}
                onChange={onChange}
                className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
                required
              />
            </div>

            <div className='form-control text-black'>
              <label className='label'>
                <span className='label-text text-black'>Stock</span>
              </label>
              <input
                type='text'
                placeholder='Please Enter Stock'
                name='diamond_stock'
                value={diamond_stock}
                onChange={onChange}
                className='input input-bordered'
                required
              />
            </div>
          </form>
          {/* footer */}
          <div className='modal-action'>
            <label
              htmlFor='add_data'
              className='btn bg-slate-300 hover:bg-slate-400 rounded-full drop-shadow-lg'>
              Close!
            </label>
            <div
              className='btn bg-blue-500 text-white hover:bg-blue-600 rounded-full drop-shadow-xl'
              onClick={handleSubmit}>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
