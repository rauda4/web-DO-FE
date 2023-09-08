import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './layout/AuthLayout';
import LandingLayout from './layout/LandingLayout';
import AdminLayout from './layout/AdminLayout';
import { useEffect, useState } from 'react';

function App() {
  const token = localStorage.getItem('token');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, [token]);

  return (
    <Routes>
      <Route
        path='/*'
        element={<LandingLayout />}
      />
      <Route
        path='/auth/*'
        element={
          isAuthenticated ? (
            <Navigate to={'/admin/'} />
          ) : (
            <AuthLayout />
          )
        }
      />
      <Route
        path='/admin/*'
        element={
          isAuthenticated ? <AdminLayout /> : <Navigate to={'/auth/login'} />
        }
      />
    </Routes>
  );
}

export default App;
