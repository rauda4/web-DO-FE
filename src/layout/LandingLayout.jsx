import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Diamond from '../pages/landingPage/diamond/Diamond';
import Product from '../pages/landingPage/product/Product';
import ContactUs from '../pages/landingPage/contactus/ContactUs';
import { useEffect } from 'react';

export default function LandingLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/diamond'
          element={<Diamond />}
        />
        <Route
          path='/product'
          element={<Product />}
        />
        <Route
          path='/contactus'
          element={<ContactUs />}
        />
        <Route
          path='*'
          element={<Navigate to={'/'} />}
        />{' '}
      </Routes>
    </>
  );
}
