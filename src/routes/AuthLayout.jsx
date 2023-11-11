import { Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../components/auth/FormRegistRedux';
import Login from '../components/auth/FormLoginRedux';
import { useEffect } from 'react';
// import Notfound from '../pages/Notfound';

export default function AuthLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        {/* <Route
          path='/*'
          element={<Login />}
        />{' '} */}
        {/* <Route
          path='/*'
          element={<Navigate to={'/auth/login'} />}
        />{' '} */}
      </Routes>
    </>
  );
}
