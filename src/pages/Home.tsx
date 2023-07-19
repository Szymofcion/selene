import { AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { loadCartItems } from "../redux/actions/cartItemsAction";
import { selectData } from "../redux/slices/cartItemsSlice";
import "../App.css";

function App() {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector(selectData);
  interface Item {
    id: number;
    description: string;
  }
  return (
    <>
      <div>
        <button
          aria-label="Increment value"
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          onClick={() => dispatch(loadCartItems())}
        >
          Increment
        </button>
        <span>
          {items.map((item: Item) => (
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
            <div key={item.id}>
              <span>{item.description}</span>
            </div>
          ))}
        </span>
      </div>
    </>
  );
}

export default App;
