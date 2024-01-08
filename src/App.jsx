import { useState } from "react";
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Blog from "./components/Blog/Blog";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Categories from "./components/Categories/Categories";
import SingleCategorie from "./components/Categories/SingleCategorie";
import SingleProduct from "./components/Products/SingleProduct";
// import PageNotFound from "./components/Page Not Found/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Product" element={<Products />} />
        <Route exact path="/Categorie" element={<Categories />} />
        <Route
          exact
          path="/Categorie/:categorieName"
          element={<SingleCategorie />}
        />
        <Route
          exact
          path="/Product/:productName/:productId"
          element={<SingleProduct />}
        />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
