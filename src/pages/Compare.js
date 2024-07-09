import React from "react";
import Breadcrum from "../components/Breadcrum";
import Meta from "../components/Meta";

function Compare() {
  return (
    <div>
      <Meta title={"Compare Product"} />
      <Breadcrum title="Compare Product" />

      <div className="compare-product-wrapper   home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-3 ">
              <div className="compare-product-card  position-relative">
                <img
                  src="images/cross.svg"
                  className="position-absolute cross img-fluid"
                  alt=""
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg " className="ml-0" alt="" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Kids Headphone bulk 10 multi colour for children
                  </h5>
                  <h6 className="price mb-3 mt-3">$ 100</h6>
                  <div>
                    <div className="product-details">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-details">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-details">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-details">
                      <h5>Color:</h5>
                    </div>
                    <div className="product-details">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
