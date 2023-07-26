import { useDispatch } from "react-redux";
import { ICartItem } from "./ListItems";

import { addItem } from "../redux/actions/addItemAction";
import { removeItem } from "../redux/actions/addItemAction";

import { AppDispatch } from "../store";

const Item = ({ item }: { item: ICartItem }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(addItem(item.id))}>Add</button>;
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>;
      <p>{item.description}</p>
      <span>{item.id}</span>
    </>
  );
};

export default Item;
