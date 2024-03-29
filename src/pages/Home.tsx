import { selectData } from "../redux/slices/cartItemsSlice";
import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";

import { loadCartItems } from "../redux/actions/cartItemsAction";

import ListItem from "../components/ListItems";
import "../App.css";
const Home = () => {
  const { items } = useSelector(selectData);
  const dispatch: AppDispatch = useDispatch();
  return (
    <>
      <div>
        <button onClick={() => dispatch(loadCartItems())}>loadCartItems</button>
        <ListItem items={items} />
      </div>
    </>
  );
};

export default Home;
