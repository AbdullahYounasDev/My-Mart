import { createContext } from "react";
import Categorie from "../Categories/Categorie";

const CatContext = createContext();

const CatProvider = ({ children }) => {
  return (
    <CatContext.Provider value={Categorie}>{children}</CatContext.Provider>
  );
};
export { CatContext, CatProvider };
