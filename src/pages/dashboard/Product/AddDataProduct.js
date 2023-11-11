import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../../../components/utils/Spinner';
import { createProduct } from '../../../feature/product/productSlice';

export default function AddDataProduct() {
  const [product_icon, setProduct_icon] = useState();
  const [formData, setFormData] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    product_stock: ''
  });

  const { product_name, product_description, product_price, product_stock } =
    formData;
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.product);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('product_name', product_name);
    formData.append('product_description', product_description);
    formData.append('product_price', product_price);
    formData.append('product_stock', product_stock);
    formData.append('file', product_icon);
    await dispatch(createProduct(formData));
    window.location.reload();
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor='add_product'
        className='btn bg-sky-700 text-white hover:bg-sky-900'>
        + Add New Data
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id='add_product'
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
                <span className='label-text text-black'>Name Product</span>
              </label>
              <input
                type='text'
                placeholder='Please Enter Name Product'
                name='product_name'
                value={product_name}
                onChange={onChange}
                className='input input-bordered font-normal'
                required
              />
            </div>

            <div className='form-control text-black'>
              <label className='label'>
                <span className='label-text text-black'>Description</span>
              </label>
              <input
                type='text'
                placeholder='Please Enter Description'
                name='product_description'
                value={product_description}
                onChange={onChange}
                className='input input-bordered font-normal'
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
                name='product_price'
                value={product_price}
                onChange={onChange}
                className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none font-normal'
                required
              />
            </div>

            <div className='form-control text-black'>
              <label className='label'>
                <span className='label-text text-black'>Stock</span>
              </label>
              <input
                type='number'
                placeholder='Please Enter Stock'
                name='product_stock'
                value={product_stock}
                onChange={onChange}
                className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none font-normal'
                required
              />
            </div>

            <div className='form-control text-black'>
              <label className='label'>
                <span className='label-text text-black'>Image</span>
              </label>
              <input
                type='file'
                onChange={(e) => setProduct_icon(e.target.files[0])}
                className='font-normal'
                id='files'
                required
              />
            </div>
          </form>
          {/* footer */}
          <div className='modal-action'>
            <label
              htmlFor='add_product'
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
