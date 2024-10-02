import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user.slice";
import orderReducer from "../slices/order.slice.js";
import menuReducer from "../slices/menu.slice.js";

const reducer = {
    user: userReducer,
    order: orderReducer,
    menu: menuReducer
};

const store = configureStore({
    reducer: reducer,
    devTools: true
});

export default store;