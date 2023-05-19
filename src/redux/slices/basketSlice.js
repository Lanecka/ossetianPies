import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  items: []
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)

      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    }, 
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)

      if (findItem) {
        findItem.count--
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)

      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    removeItem(state, action) {
      state.items = state.items.filter(obj => obj.id !== action.payload)

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum
      }, 0)

      state.totalCount = state.items.reduce((sum, obj) => {
        return obj.count + sum
      }, 0)
    },
    clearItems(state) {
      state.items = []
    }
  }
})


export const { addItem, removeItem, clearItems, minusItem } = basketSlice.actions;

export default basketSlice.reducer;