import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import cart from "../images/cart.svg";

const CartBtn = () => {
  // We get a state of addItems
  // Write the name of the file not the function
  const state = useSelector((state) => state.addItem);
  return (
    <>
      <Link to="/cart" className="d-flex align-items-center  text-white gap-10">
        <img src={cart} alt="cart" />
        <div className="d-flex flex-column gap-10">
          <span className="badge bg-white  text-dark  ">{state.length}</span>
          <p className="mb-0">Cart</p>
        </div>
      </Link>
    </>
  );
};

export default CartBtn;
