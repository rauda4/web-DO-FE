import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  diamondSelector,
  updateDiamond
} from '../../../feature/diamonds/diamondSlice';

export default function CardAdminEditDiamond() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
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

  const diamond = useSelector((state) => diamondSelector.selectById(state, id));

  useEffect(() => {
    if (diamond) {
      setFormData(diamond);
    }
  }, [diamond]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = {
      id,
      diamond_name,
      diamond_price,
      diamond_stock
    };
    await dispatch(updateDiamond(data));
    navigate('/admin/datadiamond');
  };
  return (
    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto -ml-72 mt-10 inset-0 z-50 outline-none focus:outline-none'>
      <div className='relative w-auto my-6 mx-auto max-w-3xl rounded-lg border'>
        {/*content*/}
        <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none'>
          {/*body*/}
          <div className='relative p-6 flex-auto'>
            <section>
              <div className='card flex-shrink-0 w-screen max-w-sm bg-white-900'>
                <p className='font-bold text-xl text-center'>UPDATE DATA</p>
                <div className='card-body'>
                  {/* {error && <AlertError message={error} />} */}
                  <form onSubmit={handleUpdate}>
                    <div className='form-control text-black'>
                      <label className='label'>
                        <span className='label-text text-black'>Name</span>
                      </label>
                      <input
                        type='text'
                        placeholder='Please Enter Name'
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
                        type='text'
                        placeholder='Please Enter Price'
                        name='diamond_price'
                        value={diamond_price}
                        onChange={onChange}
                        className='input input-bordered'
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
                    <div className='form-control justify-center mt-8'>
                      <button className='bg-blue-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'>
                        Save Changes
                      </button>
                      <Link
                        to={`/admin/datadiamond`}
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
