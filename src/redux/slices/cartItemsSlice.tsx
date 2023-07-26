import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface CartItemsState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | any;
}

const initialState: CartItemsState = {
  items: [],
  status: "idle",
  error: null,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    loadCartItemsStart: (state) => {
      state.status = "loading";
      state.error = null;
    },
    loadCartItemsSuccess: (state, action: PayloadAction<any[]>) => {
      state.status = "succeeded";
      state.items = action.payload;
    },
    loadCartItemsFailure: (state, action: PayloadAction<any>) => {
      state.status = "failed";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.error = action.payload;
    },
  },
});







export const {
  loadCartItemsStart,
  loadCartItemsSuccess,
  loadCartItemsFailure,
} = cartItemsSlice.actions;

export const selectData = (state: RootState) => state.cartItems;

export default cartItemsSlice.reducer;

