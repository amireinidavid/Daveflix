import React, { useState } from "react";
import DATA from "../db/DATA1";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";

import { Link } from "react-router-dom";

function SpecialProduct() {
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
      <div className="col-4">
        <div className="special-product-card mb-3">
          <div className="d-flex justify-content-between mb-3 ">
            <div className="img-fit">
              <img
                className="img-fit img-fluid"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{product.comp}</h5>
              <h6 className="title">{product.desc}</h6>
              <ReactStars count={5} size={34} value={3} activeColor="#ffd700" />
              <p className="price">
                <span className="red-p">$ {product.price}</span>

                <strike>${product.price2}</strike>
              </p>
              <div className="discount-till d-flex gap-10 align-items-center">
                <p className="mb-0 ">
                  <b>5 </b>Days
                </p>
                <div className="d-flex align-items-center gap-15">
                  <span className="badge rounded-circle p-2 bg-warning ">
                    1
                  </span>
                  <span className="badge rounded-circle p-2 bg-warning ">
                    1
                  </span>
                  <span className="badge rounded-circle p-2 bg-warning ">
                    1
                  </span>
                </div>
              </div>
              <div>
                <Link
                  data-item-id={product.id}
                  className="button mt-3"
                  onClick={() => handleCart(product)}
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Our Special Products</h1>
          </div>
        </div>
      </div>
      <div className="container-xxl">
        <div className="row justify-content-around">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
}

export default SpecialProduct;
