import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter
} from '@reduxjs/toolkit';
import axios from 'axios';

export const getDiamonds = createAsyncThunk('getdiamond', async () => {
  const response = await axios.get('http://localhost:8080/diamond');
  return response.data.data;
});
export const getDiamondsById = createAsyncThunk(
  'getdiamond by id',
  async () => {
    const response = await axios.get('http://localhost:8080/diamond/:id');
    return response.data.data;
  }
);

export const addDiamond = createAsyncThunk(
  'diamond/add',
  async ({ diamond_name, diamond_price, diamond_stock }) => {
    const response = await axios.post(`http://localhost:8080/diamond`, {
      diamond_name,
      diamond_price,
      diamond_stock
    });
    return response.data;
  }
);

export const deleteDiamond = createAsyncThunk('diamond/delete', async (id) => {
  await axios.delete(`http://localhost:8080/diamond/${id}`);
  return id;
});

export const updateDiamond = createAsyncThunk(
  'diamond/update/',
  async ({ id, diamond_name, diamond_price, diamond_stock }) => {
    const response = await axios.put(`http://localhost:8080/diamond/${id}`, {
      id,
      diamond_name,
      diamond_price,
      diamond_stock
    });
    return response.data;
  }
);

const diamondEntity = createEntityAdapter({
  selectId: (diamond) => diamond.diamond_id
});

const diamondSlice = createSlice({
  name: 'diamond',
  initialState: diamondEntity.getInitialState(),
  extraReducers: (builder) => {
    builder
      .addCase(getDiamonds.fulfilled, (state, action) => {
        diamondEntity.setAll(state, action.payload);
      })
      .addCase(getDiamondsById.fulfilled, (state, action) => {
        diamondEntity.selectId(state, action.payload);
      })
      .addCase(addDiamond.fulfilled, (state, action) => {
        diamondEntity.addOne(state, action.payload);
      })
      .addCase(deleteDiamond.fulfilled, (state, action) => {
        diamondEntity.removeOne(state, action.payload);
      })
      .addCase(updateDiamond.fulfilled, (state, action) => {
        diamondEntity.updateOne(state, action.payload);
      });
  }
});

export const diamondSelector = diamondEntity.getSelectors(
  (state) => state.diamond
);
export default diamondSlice.reducer;
