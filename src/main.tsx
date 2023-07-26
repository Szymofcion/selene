import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import { store } from "./store.tsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Cart from "./pages/Cart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <Error404 />
  },
  {
    path: "/cart",
    element: <Cart />,
    // errorElement: <Error404 />
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
