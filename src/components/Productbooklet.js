import React, { useState } from "react";
import DATA from "../db/Storeproduct";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import compare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import wish from "../images/wish.svg";

const Productbooklet = (props) => {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const { grid } = props;
  let location = useLocation();
  console.log(location);

  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };
  const cardItem = (product) => {
    return (
      <>
        <React.Fragment key={product.id}>
          <div
            className={` ${
              location.pathname === "/store" ? `gr-${grid}` : "col-3 gri"
            } `}
          >
            <Link
              data-item-id={product.id}
              to={`${product.id}`}
              key={product.id}
            >
              <div className="card  product-card mb-5 justify-content-between  ">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src={wish} alt="" />
                  </Link>
                </div>
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
                <div className="product-details  ">
                  <h6 className="card-title">{product.comp}</h6>
                  <h5 className="card-title">{product.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    activeColor="#ffd700"
                  />
                  <p className={`desc ${grid === 7 ? "d-block" : "d-none"} `}>
                    {product.desc}
                  </p>
                  <p className="lead ">$ {product.price}.00</p>

                  <div className="action-bar position-absolute  gap-10 ">
                    <div className="d-flex bg-cl gap1 flex-column">
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
                        data-item-id={product.title}
                        to={`/store/${product.id}`}
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
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row"></div>
      </div>
      <div className="container">
        <div className="row justify-content-between ">{DATA.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Productbooklet;
