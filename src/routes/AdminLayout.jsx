import { Navigate, Route, Routes } from 'react-router-dom';
// import Dashboard from '../pages/admin/dashboard/Dashboard';
import Sidebar from '../components/sidebar/Sidebar';
import Dashboard from '../pages/dashboard';
import Datadiamond from '../pages/dashboard/diamond/DataDiamond';
import Dataproduct from '../pages/dashboard/Product/DataProduct';
import CardAdminEditDiamond from '../pages/dashboard/diamond/DataDiamond';
import EditDataProduct from '../pages/dashboard/Product/EditDataProduct';
// import Notfound from '../pages/Notfound';

export default function AdminLayout() {
  return (
    <>
      <div>
        <div>
          {' '}
          <Sidebar />
        </div>
        <div className='relative md:ml-72 md:mt-0 bg-blueGray-100'>
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
              path='/datadiamond/:id'
              element={<CardAdminEditDiamond />}
            />
            <Route
              path='/dataproduct'
              element={<Dataproduct />}
            />
            <Route
              path='/dataproduct/update/:id'
              element={<EditDataProduct />}
            />
            <Route
              path='/*'
              element={<Navigate to={'/admin/dashboard'} />}
            />{' '}
            {/* <Route
              path='/*'
              element={<Notfound />}
            />{' '} */}
          </Routes>
        </div>
      </div>
    </>
  );
}
