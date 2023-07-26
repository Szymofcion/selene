import { AppThunk } from "../../store";
import {
  addCartItemsStart,
  addCartItemsSuccess,
  addCartItemsFailure,
  removCartItemsStart,
  removCartItemsSuccess,
  removCartItemsFailure
} from "../slices/addItemSlice";
// eslint-disable-next-line @typescript-eslint/require-await
export const addItem =
  (productId: number): AppThunk =>
  async (dispatch) => {
    dispatch(addCartItemsStart());
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/cart/products`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: productId }),
        }
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
      dispatch(addCartItemsSuccess(data));
    } catch (err) {
      // Use rejectWithValue to include the error message in the action payload
      dispatch(addCartItemsFailure(err));
    }
  };

export const removeItem =
  (productId: number): AppThunk =>
  async (dispatch) => {
    dispatch(removCartItemsStart());
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/cart/products/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-argument
      dispatch(removCartItemsSuccess(data));
    } catch (err) {
      // Use rejectWithValue to include the error message in the action payload
      dispatch(removCartItemsFailure(err));
    }
  };
