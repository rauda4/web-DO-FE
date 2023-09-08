import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Register from '../pages/authentication/Register';
import Login from '../pages/authentication/Login';
import { useEffect } from 'react';

export default function AuthLayout(){
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
        <Route
          path='*'
          element={<Navigate to={'/auth/login'} />}
        />{' '}
      </Routes>
    </>
  );
};
