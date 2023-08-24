import axios from 'axios';

const register = async (userData) => {
  const response = await axios.post(
    'http://localhost:3002/auth/register',
    userData
  );

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

const authService = {
  register,
};

export default authService;
