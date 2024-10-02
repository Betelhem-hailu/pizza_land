import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import orderService from "../services/order.service";

//place order
export const placeOrder = createAsyncThunk(
  "order/placeOrder",
  async (order, { rejectWithValue }) => {
    try {
        const response = await orderService.placeOrder(order);
        return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

//get order history
export const getOrderHistory = createAsyncThunk(
  "order/getOrderHistory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await orderService.getOrderHistory();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  data: [],
  error: null,
  loading: false
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(placeOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(placeOrder.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(placeOrder.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getOrderHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderHistory.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addCase(getOrderHistory.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { reducer } = orderSlice.actions;
export default orderSlice.reducer;