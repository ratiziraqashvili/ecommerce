import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export interface CartItem {
  cartQuantity: number;
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  title: string
  name: string;
  quantity: number;
}

const cartItemsFromLocalStorage = localStorage.getItem("cartItems");

const initialState = {
  cartItems: cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : ([] as CartItem[]),
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
       const itemIndex = state.cartItems.findIndex( (item: CartItem) => item.id === action.payload.id);
        if(itemIndex >= 0) {
            state.cartItems[itemIndex].cartQuantity += 1;
            toast.info("Increased product quantity", {
                position: "top-right"  
            });
        } else {
            const tempProduct = { ...action.payload, cartQuantity: 1 };
            state.cartItems.push(tempProduct);
            toast.success(`${action.payload.title} Added to cart`, {
                            position: "top-right"  
                        });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart :(state, action: PayloadAction<string>) => {
      const itemIdToRemove = action.payload;
      state.cartItems = state.cartItems.filter( (item: CartItem) => item.id !== itemIdToRemove);

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

      toast.error('Item Removed from Cart', {
        position: "top-right"
      });
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
