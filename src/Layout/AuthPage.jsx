import { Navigate, Route, Routes } from 'react-router-dom'
import Register from '../pages/Authentication/Register'
import Login from '../pages/Authentication/Login'

export const AuthPage = () => {

  return (
    <>
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path='/*' element={<Navigate to={"/"} />} /> 
        </Routes>
    </>
  )
}
