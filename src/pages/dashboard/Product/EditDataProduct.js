import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  getProduct,
  updateImage,
  // getProductById,
  updateProduct
} from '../../../feature/product/productSlice';

export default function EditDataProduct() {
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
  const { id } = useParams();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // when using get product by id
  // const product = useSelector((state) => state.product.selectData);
  const products = useSelector((state) => state.product.data);

  // when using array find product
  const product = products.find((item) => {
    return item.id === id;
  });

  useEffect(() => {
    dispatch(getProduct()); // when using array find product
    // dispatch(getProductById(id)); // when using get product by id
  }, [dispatch]);

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const data = {
      product_name,
      product_description,
      product_price,
      product_stock
    };
    const formData = new FormData();
    formData.append('file', product_icon);

    await dispatch(updateProduct({ id, data }));
    await dispatch(updateImage({ id, formData }));
    navigate('/admin/dataproduct');
  };

  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto -ml-72 mt-10 inset-0 z-50 outline-none focus:outline-none'>
      <div className='relative w-auto my-6 mx-auto max-w-3xl rounded-lg border'>
        {/*content*/}
        <div className='border rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none'>
          {/*body*/}
          <div className='relative p-6 flex-auto'>
            <section>
              <div className='card flex-shrink-0 w-screen max-w-lg bg-white-900 '>
                <p className='font-bold text-xl text-center'>UPDATE DATA</p>
                <div className='card-body'>
                  {/* {error && <AlertError message={error} />} */}
                  <form onSubmit={handleUpdate}>
                    <div className='form-control text-black'>
                      <label className='label'>
                        <span className='label-text text-black font-semibold'>
                          Name Product
                        </span>
                      </label>
                      <input
                        type='text'
                        placeholder='Please Enter Name Product'
                        name='product_name'
                        value={product_name || ''}
                        onChange={onChange}
                        className='input input-bordered capitalize'
                        required
                      />
                    </div>

                    <div className='form-control text-black mt-4'>
                      <label className='label'>
                        <span className='label-text text-black font-semibold'>
                          Description
                        </span>
                      </label>
                      <input
                        type='text'
                        placeholder='Please Enter Description'
                        name='product_description'
                        value={product_description || ''}
                        onChange={onChange}
                        className='input input-bordered capitalize'
                        required
                      />
                    </div>

                    <div className='form-control text-black mt-4'>
                      <label className='label'>
                        <span className='label-text text-black font-semibold'>
                          Price
                        </span>
                      </label>
                      <input
                        type='number'
                        placeholder='Please Enter Price'
                        name='product_price'
                        value={product_price || ''}
                        onChange={onChange}
                        className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
                        required
                      />
                    </div>

                    <div className='form-control text-black'>
                      <label className='label'>
                        <span className='label-text text-black font-semibold'>
                          Stock
                        </span>
                      </label>
                      <input
                        type='number'
                        placeholder='Please Enter Stock'
                        name='product_stock'
                        value={product_stock || ''}
                        onChange={onChange}
                        className='input input-bordered outline-none [&::-webkit-inner-spin-button]:appearance-none'
                        required
                      />
                    </div>

                    <div className='form-control text-black mt-4'>
                      <label className='label'>
                        <span className='label-text text-black font-semibold'>
                          Image
                        </span>
                      </label>
                      <input
                        type='file'
                        accept='.png, .jpg, .jpeg'
                        onChange={(e) => setProduct_icon(e.target.files[0])}
                      />
                    </div>
                    <div className='form-control justify-center mt-8'>
                      <button className='bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                        Save Changes
                      </button>
                      <Link
                        to={`/admin/dataproduct`}
                        className='text-slate-500 text-center background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                        Close
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
