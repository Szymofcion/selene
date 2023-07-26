import { selectData } from "../redux/slices/listItemSlice";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";

import { loadCartItems } from "../redux/actions/cartItemsAction";

import ListItem from "../components/ListItems";

const Cart = () => {
  const { items } = useSelector(selectData);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(loadCartItems())}>loadListItems</button>
      <ListItem items={items} />;
    </>
  );
};

export default Cart;
