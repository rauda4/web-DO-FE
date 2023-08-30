import { Navigate, Route, Routes } from 'react-router-dom'
import Register from '../pages/user/Authentication/Register'
import Login from '../pages/user/Authentication/Login'

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
