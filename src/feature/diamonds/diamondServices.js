import axios from 'axios';
// get product
const getProduct = async () => {
  const response = await axios.get('http://localhost:8080/diamond');
  if (response.data) {
    localStorage.setItem('product', JSON.stringify(response.data));
  }
  return response.data;
};

const ProductService = {
  getProduct,
};

export default ProductService;
