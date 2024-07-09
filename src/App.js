import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Info from "./pages/Info";
import ProductDetail from "./components/ProductDetail";
import ProductDetail1 from "./pages/ProductDetail1";

import Store from "./pages/Store";
import Blog from "./pages/Blog";
import Compare from "./pages/Compare";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import Cart from "./components/Cart";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Checkout from "./components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="info" element={<Info />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="cart" element={<Cart />} />
            <Route path="compare" element={<Compare />} />
            <Route path="checkout" element={<Checkout />} />

            <Route path="store/:id" element={<ProductDetail />} />
            <Route path=":id" element={<ProductDetail1 />} />

            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="store" element={<Store />} />
            <Route path="/store/kids" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
