import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import cartItemsSlice from "./redux/slices/cartItemsSlice";

export const store = configureStore({
  reducer: {
    cartItems: cartItemsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
