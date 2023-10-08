import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteDiamond } from '../../feature/diamonds/diamondSlice';
import {
  diamondSelector,
  getDiamonds
} from '../../feature/diamonds/diamondSlice';

export default function CardTableDiamond() {
  const dispatch = useDispatch();
  const diamond = useSelector(diamondSelector.selectAll);

  useEffect(() => {
    dispatch(getDiamonds());
  }, [dispatch]);
  return (
    <>
      <table className='table'>
        <thead>
          <tr>
            <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
              No
            </th>
            <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
              Name
            </th>
            <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
              Price
            </th>
            <th className='px-10 align-middle border border-solid border-l-0 border-r-0 whitespace-nowrap font-semibold text-left text-lg'>
              Stock
            </th>
          </tr>
        </thead>
        <tbody>
          {diamond.map((item, index) => (
            <tr key={item.diamond_id}>
              <th className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                {index + 1}
              </th>
              <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                {item.diamond_name}
              </td>
              <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                {(item.diamond_price || 0).toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumFractionDigits: 0,
                  minimumFractionDigits: 0
                })}
              </td>
              <td className='px-10 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-base border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
                {item.diamond_stock}
              </td>
              <td className='space-x-2'>
                <button className='btn bg-slate-300 capitalize'>
                  <Link to={`/admin/datadiamond/${item.diamond_id}`}>Edit</Link>
                </button>
                <button
                  className='btn bg-slate-300 capitalize'
                  onClick={() => dispatch(deleteDiamond(item.diamond_id))}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
