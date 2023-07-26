import { AppThunk } from '../../store';
import { loadCartItemsStart,loadCartItemsSuccess,loadCartItemsFailure } from '../slices/cartItemsSlice';
import { createSlice } from '@reduxjs/toolkit';

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
//   export const removeItem =(): AppThunk=> async(dispatch)=>{

//    dispatch(loadCartItemsStart()); 
//   try{
//    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//    await fetch(`${import.meta.env.VITE_APP_API_URL}/products`, {
//       method: 'DELETE',
//     });
    
//   }
//   catch(err){
//     console.error(err)
    
//   }
// }

// eslint-disable-next-line @typescript-eslint/require-await
export const addItem = (): AppThunk => async (dispatch) => {
  async (newItem: any, ) => {
    try {
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data;
    } catch (err) {
      // Use rejectWithValue to include the error message in the action payload
      dispatch(loadCartItemsFailure(err));
    }
  }
}
const dataSlice = createSlice({
  name: 'data',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default dataSlice.reducer;