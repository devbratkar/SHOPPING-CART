import { createSlice } from '@reduxjs/toolkit';
import CartItems from '../../CartItems'

const initialState = {
     cartItems: CartItems,
     amount: 4,
     total: 0,
     isLoading: true,
     cartPaymentGateway: false,
     paymentRoute: false,
}

const cartSlice = createSlice({
     name: 'cart',
     initialState,
     reducers: {
          clearCart: (state) => {
               state.cartItems = [];
               state.amount = state.cartItems.length;
          },
          removeItem: (state, action) => {
               const ID = action.payload;
               const filteredCartItems = state.cartItems.filter(item => item.id !== ID);
               state.cartItems = filteredCartItems;
               // state.amount -= quantity
               console.log(state.cartItems);
          },
          increase: (state, action) => {
               const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
               state.cartItems[itemIndex].amount += 1
          },
          decrease: (state,action) => {
               const itemIndex = state.cartItems.findIndex(item => item.id === action.payload)
               if ( state.cartItems[itemIndex].amount > 1) {
                    state.cartItems[itemIndex].amount -= 1
               }
          },
          updateTotal: (state,action) => {
               const totalPrice = action.payload
               state.total = Math.floor(totalPrice * 100) /100
          },
          openPaymentGateway: (state,action)=> {
               state.cartPaymentGateway = action.payload;
          },
          payment: (state) => {
               state.paymentRoute = true
          }
     }
})

export const { clearCart, removeItem, increase, decrease, updateTotal, openPaymentGateway, payment} = cartSlice.actions

export default cartSlice.reducer