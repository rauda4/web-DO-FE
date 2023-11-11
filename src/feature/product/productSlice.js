import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getProduct = createAsyncThunk('getproduct', async (thunkAPI) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      'http://localhost:8080/product?page=1&limit=100',
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    return response.data.data;
  } catch (error) {
    const message = error.response.data.result;
    return thunkAPI.rejectWithValue(message);
  }
});

export const getProductById = createAsyncThunk(
  'getProductById',
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.data;
    } catch (error) {
      const message = error.response.data.result;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'createProduct',
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:8080/product/create',
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.data;
    } catch (error) {
      const message = error.response.data.result;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'updateProdduct',
  async ({ id, data, thunkAPI }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/product/update/${id}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.data;
    } catch (error) {
      const message = error.response.data.result;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updateImage = createAsyncThunk(
  'updateImage',
  async ({ id, formData, thunkAPI }) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `http://localhost:8080/product/image/update/${id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return response.data.data;
    } catch (error) {
      const message = error.response.data.result;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'deleteProduct',
  async (id, thunkAPI) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/product/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      window.location.reload();
      return id;
    } catch (error) {
      const message = error.response.data.result;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    newData: [],
    selectData: {},
    updateData: {},
    deleteData: {},
    isLoading: false,
    isError: false,
    isSucces: false,
    message: ''
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        state.isSucces = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.newData = action.payload;
        state.isSucces = true;
        state.isLoading = false;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.selectData = action.payload;
        state.isSucces = true;
        state.isLoading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.isLoading = false;
        state.isSucces = true;
      })
      .addCase(updateImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateImage.fulfilled, (state, action) => {
        state.updateData = action.payload;
        state.isLoading = false;
        state.isSucces = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.deleteData = action.payload;
      });
  }
});

export default productSlice.reducer;
