import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductCardPropType } from "../components/ProductCard";

type CartState = {
  items: Record<string, ProductCardPropType>;
};

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<ProductCardPropType>) => {
      state.items = {
        ...state.items,
        [action.payload.id]: {
          ...action.payload,
          quantity: state.items[action.payload.id]
            ? (state.items[action.payload.id].quantity || 0) + 1
            : 1,
        },
      };
    },
    removeItemFromCart: (state, action: PayloadAction<number | string>) => {
      delete state.items[action.payload];
    },
    decreaseQuantity: (state, action: PayloadAction<number | string>) => {
      state.items = {
        ...state.items,
        [action.payload]: {
          ...state.items[action.payload],
          quantity: (state.items[action.payload].quantity || 0) - 1,
        },
      };
    },
  },
});

export const { addItemToCart, removeItemFromCart, decreaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state: { cart: CartState }) => state.cart.items;
export const getCartQuantity = (state: { cart: CartState }) =>
  Object.values(state.cart.items).reduce((a, b) => a + (b?.quantity || 0), 0);

export const getCartTotal = (state: { cart: CartState }) =>
  Object.values(state.cart.items).reduce(
    (a, b) => a + (b?.quantity || 1) * (b?.price || 0),
    0
  );
