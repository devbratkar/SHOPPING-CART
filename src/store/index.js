import {configureStore} from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice'
import textReducer from '../features/textReducer'

const store = configureStore({
     reducer: {
          cart: cartReducer,
          text: textReducer,
     }
});

export default store;