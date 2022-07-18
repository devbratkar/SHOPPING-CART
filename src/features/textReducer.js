import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     initialText: 'Devbrat Kar',
     age: 23,
}

const textSlice = createSlice({
     name: 'text',
     initialState,
     reducers: {
          changeText: (state,action)=> {
               console.log(state,action.payload);
          }
     }
})

export const {changeText} = textSlice.actions;
export default textSlice.reducer;