import { ProdutCartSchema } from '@/schema/ProductSchema';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  name: string;
  price?: number;
}

interface ProductState {
  myCart: ProdutCartSchema[]
}

const initialState: ProductState = {
    myCart: [{
        slug: "product-1",
        name: "Product 1",
        price: 9.99,
        imageUrl: "https://media.istockphoto.com/id/183424709/photo/bag-of-groceries.jpg?s=612x612&w=0&k=20&c=KtirSlaNwcrzEc1K3s9WOUpv_eH6DNheaVWbTnsEKSE=",
        count: 2
    },
    {
        slug: "product-2",
        name: "Product 2",
        price: 19.99,
        imageUrl: "https://media.istockphoto.com/id/183424709/photo/bag-of-groceries.jpg?s=612x612&w=0&k=20&c=KtirSlaNwcrzEc1K3s9WOUpv_eH6DNheaVWbTnsEKSE=",
        count: 2
    }],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setCartItem: (state,action:PayloadAction<ProdutCartSchema>) => {
        state.myCart.push(action.payload);
    },

    removeCartItem: (state,action:PayloadAction<string>) => {
        state.myCart = state.myCart.filter((item) => item.slug !== action.payload)
    },

    updateCartItemCount: (state,action:PayloadAction<{slug: string, count: number}>) => {
        const product = state.myCart.find(p => p.slug === action.payload.slug);
        if(product) product.count = action.payload.count;
    }
  },
});

export const {
    setCartItem,
    removeCartItem,
    updateCartItemCount
} = productSlice.actions;

export default productSlice.reducer;
