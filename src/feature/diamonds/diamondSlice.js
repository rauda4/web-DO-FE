import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
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
    // return response.data.data;
    console.log(response);
  },
);

const diamondEntity = createEntityAdapter({
  selectId: (diamond) => diamond.id,
});

const diamondSlice = createSlice({
  name: 'diamond',
  initialState: diamondEntity.getInitialState(),
  // extraReducers: {
  //   [getDiamonds.fulfilled]: (state, action) => {
  //     diamondEntity.setAll(state, action.payload);
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(getDiamonds.fulfilled, (state, action) => {
        diamondEntity.setAll(state, action.payload);
      })
      .addCase(getDiamondsById.fulfilled, (state, action) => {
        diamondEntity.setAll(state, action.payload);
      });
  },
});

export const diamondSelector = diamondEntity.getSelectors(
  (state) => state.diamond,
);
export default diamondSlice.reducer;
