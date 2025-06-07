import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutCartSchema } from '@/schema/ProductSchema'

interface CartState {
  myCart: ProdutCartSchema[]
  total: number
}

const initialState: CartState = {
  myCart: [],
  total: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProdutCartSchema>) => {
      const existingItem = state.myCart.find(item => item.slug === action.payload.slug)
      
      if (existingItem) {
        existingItem.count = (existingItem.count || 1) + 1
      } else {
        state.myCart.push({ ...action.payload, count: 1 })
      }
      
      state.total = state.myCart.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0)
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.myCart = state.myCart.filter(item => item.slug !== action.payload)
      state.total = state.myCart.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0)
    },
    
    updateQuantity: (state, action: PayloadAction<{ slug: string; quantity: number }>) => {
      const item = state.myCart.find(item => item.slug === action.payload.slug)
      if (item) {
        if (action.payload.quantity <= 0) {
          state.myCart = state.myCart.filter(item => item.slug !== action.payload.slug)
        } else {
          item.count = action.payload.quantity
        }
      }
      state.total = state.myCart.reduce((sum, item) => sum + (item.price * (item.count || 1)), 0)
    },
    
    clearCart: (state) => {
      state.myCart = []
      state.total = 0
    }
  },
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
