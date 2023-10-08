import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from './routes/AuthLayout';
import LandingLayout from './routes/LandingLayout';
import AdminLayout from './routes/AdminLayout';
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
            <Navigate to={'/admin/datadiamond'} />
          ) : (
            <AuthLayout />
          )
        }
      />
      <Route
        path='/admin/*'
        element={isAuthenticated ? <AdminLayout /> : <AuthLayout />}
      />
    </Routes>
  );
}

export default App;
