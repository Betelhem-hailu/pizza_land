import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import menuService from "../services/menu.service";

//get menu by id
export const getMenuById = createAsyncThunk(
  "menu/getMenuById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await menuService.getMenuById(id);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

//get all menus
export const getAllMenus = createAsyncThunk(
  "menu/getAllMenus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await menuService.getAllMenus();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

//get popular menus
export const getPopularMenus = createAsyncThunk(
  "menu/getPopularMenus",
  async (_, { rejectWithValue }) => {
    try {
      const response = await menuService.getPopularMenus();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

//get top restaurants
export const getTopRestaurants = createAsyncThunk(
  "menu/getTopRestaurants",
  async (_, { rejectWithValue }) => {
    try {
      const response = await menuService.getTopRestaurants();
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  menuData: [],
  popularData: [],
  topRestaurants: [],
  data: [],
  error: null,
  loading: false
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMenuById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMenuById.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading= false;
      })
      .addCase(getMenuById.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getAllMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMenus.fulfilled, (state, { payload }) => {
        state.menuData = payload;
      })
      .addCase(getAllMenus.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getPopularMenus.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopularMenus.fulfilled, (state, { payload }) => {
        state.popularData = payload;
      })
      .addCase(getPopularMenus.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getTopRestaurants.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTopRestaurants.fulfilled, (state, { payload }) => {
        state.topRestaurants = payload;
      })
      .addCase(getTopRestaurants.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { reducer } = menuSlice.actions;
export default menuSlice.reducer;
