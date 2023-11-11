import axios from 'axios';
const urlProduct = `http://localhost:8080/product`;

export const getDataProduct = async () => {
  const response = await axios.get(urlProduct);
  return response.data.data;
};

