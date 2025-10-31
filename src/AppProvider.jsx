import { createContext, useReducer, useState, useEffect } from "react";
import { storeReducer } from "./StoreReducer";

const AppContext = createContext();

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
const AppProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  const [state, dispatch] = useReducer(storeReducer, initialState);

  // persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(state.cart || []));
    } catch {
      // ignore
    }
  }, [state.cart]);

  return (
    <AppContext.Provider value={{ state, dispatch, showCart, setShowCart }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export { AppContext };
