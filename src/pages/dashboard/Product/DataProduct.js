import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  deleteProduct,
  getProduct
} from '../../../feature/product/productSlice';
import AddDataProduct from './AddDataProduct';

export default function DataProduct() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.data);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <>
      <div className='flex space-x-4 items-center bg-sky-900 justify-between px-10'>
        <p className='mb-5 mt-5 font-semibold text-white'>Data Product</p>
        <form>
          <div className='form-control md:w-72'>
            <input
              placeholder='Seaarch'
              className='input input-bordered w-24 md:w-auto h-8'
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className='overflow-x-auto relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg'>
        <table className='table'>
          <thead>
            <tr>
              <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
                No
              </th>
              <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
                Name Product
              </th>
              <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
                Description
              </th>
              <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
                Stock
              </th>
              <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
                Price
              </th>
              <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
                Image
              </th>
              <th>
                <AddDataProduct />
              </th>
            </tr>
          </thead>
          <tbody>
            {product
              .slice()
              .filter((item) =>
                search.toLowerCase() === ''
                  ? item
                  : item.product_name.toLowerCase().includes(search) ||
                    item.product_description.toLowerCase().includes(search) ||
                    item.product_price
                      .toLocaleString()
                      .toLowerCase()
                      .includes(search)
              )
              .sort((a, b) => a.product_name.localeCompare(b.product_name))
              .map((item, index) => {
                return (
                  <tr key={item.id}>
                    <th className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left capitalize'>
                      {index + 1}
                    </th>
                    <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left capitalize'>
                      {item.product_name}
                    </td>
                    <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left capitalize'>
                      {item.product_description}
                    </td>
                    <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left capitalize'>
                      {item.product_stock}
                    </td>
                    <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left capitalize'>
                      {(item.product_price || 0).toLocaleString('id-ID', {
                        style: 'currency',
                        currency: 'IDR',
                        maximumFractionDigits: 0,
                        minimumFractionDigits: 0
                      })}
                    </td>
                    <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left capitalize'>
                      <a
                        href={item.product_icon}
                        className='text-blue-600'>
                        See Image
                      </a>
                    </td>
                    <td className='flex'>
                      <button className='btn bg-slate-300 capitalize'>
                        <Link to={`/admin/dataproduct/update/${item.id}`}>
                          Edit
                        </Link>
                      </button>
                      <button
                        className='btn bg-slate-300 capitalize ml-5'
                        onClick={() => dispatch(deleteProduct(item.id))}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
