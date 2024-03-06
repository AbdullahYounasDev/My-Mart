import { createContext } from "react";
import Product from "../Products/Product";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={Product}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
