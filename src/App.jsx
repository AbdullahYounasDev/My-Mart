/** @format */

import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import SingleCategorie from "./components/Categories/SingleCategorie";
import SingleProduct from "./components/Products/SingleProduct";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import PageNotFound from "./components/Page Not Found/PageNotFound";
import Cart from "./components/AddToCart/Cart";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route exact path="/My-Mart" element={<Home />} />

        <Route exact path="/My-Mart/Product" element={<Products />} />
        <Route exact path="/My-Mart/Categorie" element={<Categories />} />
        <Route
          exact
          path="/My-Mart/Categorie/:categorieName"
          element={<SingleCategorie />}
        />
        <Route
          exact
          path="/My-Mart/Product/:productName/:productId"
          element={<SingleProduct />}
        />
        <Route exact path="/My-Mart/About" element={<About />} />
        <Route exact path="/My-Mart/Contact" element={<Contact />} />
        <Route exact path="/My-Mart/Cart/" element={<Cart />} />
        <Route exact path="/My-Mart/Login/" element={<Login />} />
        <Route exact path="/My-Mart/Signup/" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
