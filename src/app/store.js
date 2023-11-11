import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../feature/auth/authSlice';
import diamondtSlice from '../feature/diamonds/diamondSlice';
import productSlice from '../feature/product/productSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    diamond: diamondtSlice,
    product: productSlice
  }
});
