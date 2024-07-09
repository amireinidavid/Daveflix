import React from "react";
import DATA from "../db/Storeproduct";
import ReactStars from "react-rating-stars-component";

import { Link, useLocation } from "react-router-dom";

const Productbooklet = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  const cardItem = (item) => {
    return (
      <>
        <React.Fragment key={item.title}>
          <div
            className={` ${
              location.pathname === "/store" ? `gr-${grid}` : "col-3 gri"
            } `}
          >
            <Link
              data-item-id={item.id}
              to={`/products`}
              className="  "
              key={item.title}
            >
              <div className="card  product-card mb-5 justify-content-between  ">
                <div className="wishlist-icon position-absolute">
                  <Link>
                    <img src="images/wish.svg" alt="" />
                  </Link>
                </div>
                <div className="product-image">
                  <img
                    src={item.img}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                  <img
                    src={item.img1}
                    className="card-img-top img-fluid"
                    alt={item.title}
                  />
                </div>
                <div className="product-details  ">
                  <h6 className="card-title">{item.comp}</h6>
                  <h5 className="card-title">{item.title}</h5>
                  <ReactStars
                    count={5}
                    size={24}
                    value={5}
                    activeColor="#ffd700"
                  />
                  <p className={`desc ${grid === 7 ? "d-block" : "d-none"} `}>
                    {item.desc}
                  </p>
                  <p className="lead ">$ {item.price}.00</p>

                  <div className="action-bar position-absolute  gap-10 ">
                    <div className="d-flex bg-cl gap1 flex-column">
                      <Link className="bg-cl">
                        <img src="images/prodcompare.svg" alt="" />
                      </Link>
                      <Link className="bg-cl">
                        <img src="images/add-cart.svg" alt="" />
                      </Link>

                      <Link
                        className="bg-cl"
                        data-item-id={item.title}
                        to={`/products/ ${item.title}`}
                      >
                        <img src="images/view.svg" alt="" />
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
