import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import Diamond from '../pages/landingPage/diamond/Diamond'
import Product from '../pages/landingPage/product/Product'
import ContactUs from '../pages/landingPage/contactus/ContactUs'



export const LandingPage = () => {

  return (
    <>
        <Navbar transparent />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/diamond" element={<Diamond />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path='/*' element={<Navigate to={"/"} />} /> 
        </Routes>
    </>
  )
}
