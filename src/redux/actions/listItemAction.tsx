import { AppThunk } from "../../store";
import {
  loadListItemsStart,
  loadListItemsSuccess,
  loadListItemsFailure,
} from "../slices/listItemSlice";

export const loadListItems = (): AppThunk => async (dispatch) => {
  dispatch(loadListItemsStart());
  try {
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/cart/products`
    );
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    dispatch(loadListItemsSuccess(data));
  } catch (err) {
    dispatch(loadListItemsFailure(err));
  }
};
