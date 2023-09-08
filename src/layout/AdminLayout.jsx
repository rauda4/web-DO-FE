import { Navigate, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/admin/dashboard/Dashboard';
// import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../pages/dashboard'
import DataDiamond from '../pages/dashboard/diamond/DataDiamond'
import DataProduct from '../pages/dashboard/Product/DataProduct'

export default function AdminLayout() {
  return (
    <>
      <div className='flex'>
        <div className='w-1/3'> {/* <Sidebar /> */}</div>
        <div className='p-6'>
          <Routes>
          <Route
          path='/dashboard'
          element={<Dashboard />}
        />
        <Route
          path='/datadiamond'
          element={<DataDiamond />}
        />
        <Route
          path='/dataproduct'
          element={<DataProduct />}
        />
        <Route
          path='*'
          element={<Navigate to={'/admin/dashboard'} />}
        />{' '}
          </Routes>
        </div>
      </div>
    </>
  );
};
