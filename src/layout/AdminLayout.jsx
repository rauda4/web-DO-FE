import { Navigate, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/admin/dashboard/Dashboard';
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../pages/dashboard';
import Datadiamond from '../pages/dashboard/diamond/DataDiamond';
import Dataproduct from '../pages/dashboard/Product/DataProduct';

export default function AdminLayout() {
  return (
    <>
      <div className='flex'>
        <div className='w-1/3'>
          {' '}
          <Sidebar />
        </div>
        <div className='p-6'>
          <Routes>
            <Route
              path='/dashboard'
              element={<Dashboard />}
            />
            <Route
              path='/datadiamond'
              element={<Datadiamond />}
            />
            <Route
              path='/dataproduct'
              element={<Dataproduct />}
            />
            <Route
              path='/*'
              element={<Navigate to={'/admin/dashboard'} />}
            />{' '}
          </Routes>
        </div>
      </div>
    </>
  );
}
