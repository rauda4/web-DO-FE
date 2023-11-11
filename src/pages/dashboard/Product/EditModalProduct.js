import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  getProduct,
  updateProduct
} from '../../../feature/product/productSlice';

export default function EditModalProduct(idProduct) {
  const [product_icon, setProduct_icon] = useState();
  const [formData, setFormData] = useState({
    product_name: '',
    product_description: '',
    product_price: '',
    product_stock: ''
  });

  const { product_name, product_description, product_price, product_stock } =
    formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.data);
  const product = products.find((item) => {
    return item.id === { idProduct };
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('product_name', product_name);
    // formData.append('product_description', product_description);
    // formData.append('product_price', product_price);
    // formData.append('product_stock', product_stock);
    // formData.append('file', product_icon || product.product_icon);
    // await dispatch(updateProduct({ id, formData }));
    // navigate('/admin/dataproduct');
  };

  return (
    <div>
      {/* The button to open modal */}
      <label
        htmlFor='Edit_ModalPoduct'
        className='btn bg-slate-300 capitalize'>
        Edit Modal
      </label>

      {/* Put this part before </body> tag */}
      <input
        type='checkbox'
        id='Edit_ModalPoduct'
        className='modal-toggle'
      />
      <div className='modal'>
        <div className='modal-box'>
          <p className='font-bold text-xl text-center py-4'>Update Product</p>
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
                className='input input-bordered'
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
                className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
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
                name='product_stock'
                value={product_stock}
                onChange={onChange}
                className='input input-bordered'
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
                required
              />
            </div>
          </form>
          {/* footer */}
          <div className='modal-action'>
            <label
              htmlFor='Edit_ModalPoduct'
              className='btn bg-slate-300 hover:bg-slate-400 rounded-full drop-shadow-lg'>
              Close!
            </label>
            <div
              className='btn bg-blue-500 text-white hover:bg-blue-600 rounded-full drop-shadow-xl'
              onClick={handleUpdate}>
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
