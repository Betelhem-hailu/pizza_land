import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/user.service";

export const register = createAsyncThunk(
  "user/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await userService.register(formData);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    try {
      const data = await userService.login(email, password);
      console.log(data);
      return { data };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const initialState = {
  isLoggedIn: false,
  user: 
  typeof window !== "undefined" && localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null,
  loading: false,
  data: [],
  users: [],
  error: null,
  msg: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
        state.msg = payload.data;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.loading = false;
        state.user = payload.data.data;
        state.error = null;
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(payload.data.data));
        }
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoggedIn = false;
        state.loading = false;
        state.user = null;
        state.error = payload;
      })
  },
});

export const { reducer } = userSlice.actions;
export default userSlice.reducer;
