import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import Diamond from '../pages/user/landingPage/diamond/Diamond'
import DiamondRedux from '../pages/admin/landingPage/diamond/DiamondRedux'
import Product from '../pages/user/landingPage/product/Product'
import ContactUs from '../pages/user/landingPage/contactus/ContactUs'



export const LandingPage = () => {

  return (
    <>
        <Navbar transparent />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diamond" element={<Diamond />} />
            <Route path="/diamond/redux" element={<DiamondRedux />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path='/*' element={<Navigate to={"/"} />} /> 
        </Routes>
    </>
  )
}
