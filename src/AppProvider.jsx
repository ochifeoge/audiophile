import { createContext, useReducer, useState, useEffect } from "react";
import { storeReducer } from "./StoreReducer";
// import { useQuery } from "@tanstack/react-query";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

const AppContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [orderSuccessful, setOrderSuccessful] = useState(false);

  const [state, dispatch] = useReducer(storeReducer, initialState);

  // persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(state.cart || []));
    } catch {
      // ignore
    }
  }, [state.cart]);

  // const fetchProducts = async () => {
  //   const res = await fetch("/product.json");
  //   const data = await res.json();

  //   return data;
  // };

  // const {
  //   data: products = [],
  //   isLoading,
  //   isError,
  //   refetch,
  // } = useQuery({
  //   queryKey: ["products"],
  //   queryFn: fetchProducts,
  // });

  const products = useQuery(api.products.getProducts);
  console.log(products);
  return (
    <AppContext.Provider
      value={{
        state,
        orderSuccessful,
        setOrderSuccessful,
        products,
        dispatch,
        showCart,
        setShowCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
