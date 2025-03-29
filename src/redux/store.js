import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import cartReducer from "../slice/cartSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
  },
});

console.log(store.getState());

export { store };
