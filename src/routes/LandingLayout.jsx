import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Diamond from '../pages/landingPage/diamond/Diamond';
import Product from '../pages/landingPage/product/Product';
import ContactUs from '../pages/landingPage/contactus/ContactUs';
import { useEffect } from 'react';
import Payment from '../pages/landingPage/diamond/Payment';
import Testing from '../pages/landingPage/testing/Testing';

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
          path='/mobile-legends'
          element={<Diamond />}
        />
        <Route
          path='/payment'
          element={<Payment />}
        />
        <Route
          path='/product'
          element={<Product />}
        />
        <Route
          path='/contact-us'
          element={<ContactUs />}
        />
        <Route
          path='/testing'
          element={<Testing />}
        />
        <Route
          path='*'
          element={<Navigate to={'/'} />}
        />{' '}
      </Routes>
    </>
  );
}
