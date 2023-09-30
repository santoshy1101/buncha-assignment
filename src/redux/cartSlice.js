// cartSlice.js (Redux)
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const existingItem = state.find(
        (item) => item.product_id === action.payload.product_id,
      )

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity++
      } else {
        // If the item is not in the cart, add it
        state.push({ ...action.payload, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      // Find the index of the item to remove
      const index = state.findIndex(
        (item) => item.product_id === action.payload.product_id,
      )

      if (index !== -1) {
        // If the item is found, remove it
        state.splice(index, 1)
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
