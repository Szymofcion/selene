import { selectAuthState } from "../../state/products/reducer";
import { useDispatch, useSelector } from "react-redux";
import { fetchFakeAPiProduct } from "../../state/products/action";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
  Key,
  useEffect,
  useState,
} from "react";

interface Cart {
  date?: string;
  id?: number;
  products: Product[];
  userId: number;
  __v: number;
}
interface Product {
  productId: number;
  quantity: number;
}

export default function Cart() {
  const [cart, setCart] = useState<Cart>();
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    handleGetProduct();
  }, []);

  const handleGetProduct = async () => {
    setCart(await fetchFakeAPiProduct());
    console.log(cart);
    setProducts(cart?.products!);
  };

  return (
    <div>
      Cart<button onClick={handleGetProduct}>Fetching</button>
      <div>
        {products?.map((product) => {
          return <div key={product.productId}>{product.productId}</div>;
        })}
      </div>
    </div>
  );
}
