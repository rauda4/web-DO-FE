import axios from 'axios';
import jwtDecode from 'jwt-decode';
// Register user
const register = async (userData) => {
  const response = await axios.post(
    'http://localhost:8080/auth/register',
    userData,
  );
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(
    'http://localhost:8080/auth/login',
    userData,
  );
  const accesToken = response.data.token;
  if (response.data.auth === true) {
    localStorage.setItem('token', accesToken);
    const userAccount = jwtDecode(accesToken);
    localStorage.setItem('userId', userAccount.id);
    localStorage.setItem('username', userAccount.username);
    localStorage.setItem('email', userAccount.email);
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('username');
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('user');
  window.location.reload();
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
