import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface IListItemsState {
  items: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | any;
}

const initialState: IListItemsState = {
  items: [],
  status: "idle",
  error: null,
};

export const listItemsSlice = createSlice({
  name: "listItems",
  initialState,
  reducers: {
    loadListItemsStart: (state) => {
      state.status = "loading";
      state.error = null;
    },
    loadListItemsSuccess: (state, action: PayloadAction<any[]>) => {
      state.status = "succeeded";
      state.items = action.payload;
    },
    loadListItemsFailure: (state, action: PayloadAction<any>) => {
      state.status = "failed";
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state.error = action.payload;
    },
  },
});

export const {
  loadListItemsStart,
  loadListItemsSuccess,
  loadListItemsFailure,
} = listItemsSlice.actions;

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
export const selectData = (state: RootState) => state.listItems;

export default listItemsSlice.reducer;
