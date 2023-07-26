import { createSlice, PayloadAction } from "@reduxjs/toolkit";


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
export const addItemSlice = createSlice({
    name: 'addItems',
    initialState,
    reducers: {
        addCartItemsStart: (state) => {
          state.status = "loading";
          state.error = null;
        },
        addCartItemsSuccess: (state, action: PayloadAction<any[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        },
        addCartItemsFailure: (state, action: PayloadAction<any>) => {
          state.status = "failed";
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          state.error = action.payload;
        },
        removCartItemsStart: (state) => {
            state.status = "loading";
            state.error = null;
          },
        removCartItemsSuccess: (state, action: PayloadAction<any[]>) => {
            state.status = "succeeded";
            state.items = action.payload;
          },
        removCartItemsFailure: (state, action: PayloadAction<any>) => {
            state.status = "failed";
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            state.error = action.payload;
          },
      },
  });

  
  export const {
    addCartItemsStart,
    addCartItemsSuccess,
    addCartItemsFailure,
    removCartItemsStart,
    removCartItemsSuccess,
    removCartItemsFailure
  } = addItemSlice.actions;
  

  export default addItemSlice.reducer;
