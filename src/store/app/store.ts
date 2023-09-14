import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartSlice';
import userReducer from "../features/userSlice"
import styleReducer from '../features/categorySlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    style: styleReducer,
  },
});

export default store;