import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthPage } from './Layout/AuthPage';
import { LandingPage } from './Layout/LandingPage';
import 'react-toastify/dist/ReactToastify.css';
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
        element={<LandingPage />}
      />
      <Route
        path='/auth/*'
        element={isAuthenticated ? <Navigate to={'/'} /> : <AuthPage />}
      />
    </Routes>
  );
}

export default App;
