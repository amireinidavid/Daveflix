import React from "react";
import Breadcrum from "../components/Breadcrum";
import Meta from "../components/Meta";

function Wishlist() {
  return (
    <>
      <Meta title={"My Wishlist"} />
      <Breadcrum title="My Wishlist" />

      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className="wishlist-details px-3 py-3 bg-white">
                  <h5 className="title">
                    Kids Headphone bulk 10 multi colour for children
                  </h5>
                  <h6 className="price"> $ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className="wishlist-details px-3 py-3 bg-white">
                  <h5 className="title">
                    Kids Headphone bulk 10 multi colour for children
                  </h5>
                  <h6 className="price"> $ 100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt="cross"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt=""
                  />
                </div>
                <div className="wishlist-details px-3 py-3 bg-white">
                  <h5 className="title">
                    Kids Headphone bulk 10 multi colour for children
                  </h5>
                  <h6 className="price"> $ 100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
