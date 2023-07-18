import { AppThunk } from '../../store';
import { loadCartItemsStart,loadCartItemsSuccess,loadCartItemsFailure } from '../slices/cartItemsSlice';

export const loadCartItems = (): AppThunk => async (dispatch) => {
    dispatch(loadCartItemsStart());
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/products`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      dispatch(loadCartItemsSuccess(data));
    } catch (err) {
      dispatch(loadCartItemsFailure(err));
    }
  };
