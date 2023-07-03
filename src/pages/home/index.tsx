import { selectAuthState } from "../../state/products/reducer";
import { useSelector } from "react-redux";

export default function Home() {
  const authState = useSelector(selectAuthState);
  console.log(authState);

  return <div>About</div>;
}
