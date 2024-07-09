import React, { useState } from "react";
import DATA from "../db/DATA1";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { Link } from "react-router-dom";
import compare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import wish from "../images/wish.svg";

const ProductCard = () => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
    console.log(product);
  };

  const cardItem = (product) => {
    return (
      <React.Fragment key={product.id}>
        <div className="col-3">
          <Link
            data-item-id={product.id}
            to={`/${product.id}`}
            className="card mb-3 product-card position-relative "
            key={product.id}
            style={{ width: "18rem" }}
          >
            <div className="product-image">
              <img
                src={product.img}
                className="card-img-top img-fluid"
                alt={product.title}
              />
              <img
                src={product.img1}
                className="card-img-top img-fluid"
                alt={product.title}
              />
            </div>

            <div className="wishlist-icon position-absolute">
              <Link>
                <img src={wish} alt="" />{" "}
              </Link>
            </div>
            <div className="product-details  ">
              <div className="card-body  ">
                <h6 className="card-title">{product.comp}</h6>
                <h5 className="card-title">{product.title}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  value={5}
                  activeColor="#ffd700"
                />
                <p className="lead ">₦ {product.price}.00</p>

                <div className="action-bar position-absolute  gap-1 ">
                  <div className="d-flex bg-cl flex-column">
                    <Link className="bg-cl">
                      <img src={compare} alt="" />
                    </Link>
                    <Link className="bg-cl">
                      <img
                        src={addcart}
                        onClick={() => handleCart(product)}
                        alt=""
                      />
                    </Link>

                    <Link
                      className="bg-cl"
                      data-item-id={product.id}
                      to={`store/${product.id}`}
                    >
                      <img src={view} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </React.Fragment>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Our Featured Collections</h1>
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
