import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delItem } from "../redux/actions/index";
import { Link, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const state = useSelector((state) => state.addItem);
  const dispatch = useDispatch();

  const handleClose = (item) => {
    dispatch(delItem(item));
  };
  const notify = () => toast("Item Sucessfuly removed from cart");

  const cartheading = () => {
    return (
      <>
        <section className="cart-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="cart-header  d-flex justify-content-between align-items-center">
                  <h4 className="cart-col-1">Product</h4>
                  <h4 className="cart-col-2">Price</h4>
                  <h4 className="cart-col-3">Quantity</h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  const cartItems = (cartItem) => {
    return (
      <>
        <section className="cart-wrapper home-wrapper-2  bg-white py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="cart-data border-bottom mb-2  py-3 d-flex justify-content-between align-items-center">
                  <div className="cart-col-1 gap-15 d-flex align-items-center ">
                    <div className="w-25">
                      <img
                        src={cartItem.img}
                        alt=""
                        className="img-fluid rounded-3"
                      />
                    </div>
                    <div className="w-75">
                      <p>{cartItem.title}</p>
                      <p>Color: {cartItem.color}</p>
                      <p>Size: {cartItem.size}</p>
                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">₦ {cartItem.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        type="number"
                        name=""
                        className="form-control"
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id="quantity"
                      />
                    </div>
                    <div onClick={() => handleClose(cartItem)}>
                      <AiFillDelete
                        onClick={notify}
                        className=" del p-2 rounded-1"
                      />

                      <ToastContainer
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <img src="images/empty-cart.jpg" alt="" />
            <h3 className="align-items-center ml-6"> Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 py-2"></div>
        </div>
      </div>
    );
  };

  const checkout = () => {
    var total = 0;
    const itemList = (cartItem) => {
      total = total + cartItem.price;
    };
    return (
      <>
        {state.map(itemList)}
        <div className="d-flex justify-content-between">
          <Link className="button shop" to="/store">
            Continue Shopping
          </Link>
        </div>
        <div className="col-12 py-2 ps">
          <div className="d-flex justify-content-between">
            <div>
              <h4>Subtotal: ₦ {total}</h4>
              <p>Tax And Shipping calculated in checkout</p>
              <NavLink
                to="/checkout"
                className="button d-flex flex-column align-items-center"
              >
                Proceed To checkout
              </NavLink>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && cartheading()}
      {state.length !== 0 && state.map(cartItems)}

      {state.length !== 0 && button()}
      {state.length !== 0 && checkout()}
    </>
  );
};

export default Cart;
