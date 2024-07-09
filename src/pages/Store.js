import React, { useState } from "react";
import Breadcrum from "../components/Breadcrum";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductBooklet from "../components/Productbooklet";

function Store() {
  const [grid, SetGrid] = useState(4);

  return (
    <>
      <Meta title={"OUR STORE"} />
      <Breadcrum title="Our Store" />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="fliter-card mb-3">
                <h3 className="fliter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv </li>
                    <li>Camera</li>
                    <li>Laptops</li>
                  </ul>
                </div>
              </div>
              <div className="fliter-card mb-3">
                <h3 className="fliter-title">Fliter By</h3>
                <div>
                  <h5 className="subtitle">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                        checked
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (12)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out Of Stock (9)
                      </label>
                    </div>
                  </div>
                  <h5 className="subtitle">Price</h5>
                </div>
              </div>
              <div className="fliter-card mb-3">
                <h3 className="fliter-title">Product Tags</h3>
                <div>
                  <div className="product-tag d-flex align-items-center flex-wrap gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">
                      HeadPhones
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">
                      Fashion
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">
                      Shoes
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">
                      Kids Clothes
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3 ">
                      Laptops
                    </span>
                  </div>
                </div>
              </div>
              <div className="fliter-card  mb-3">
                <h3 className="fliter-title">Random Products</h3>
                <div>
                  <div className="random-products mb-3  d-flex">
                    <div className="w-90">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphone bulk 10 multi colour for children</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        activeColor="#ffd700"
                      />
                      <p>$ 500.00</p>
                    </div>
                  </div>
                  <div className="random-products  d-flex">
                    <div className="w-90">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Kids Headphone bulk 10 multi colour for children</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value="4"
                        activeColor="#ffd700"
                      />
                      <p>$ 500.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="fliter-sort-grid">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling" selected="selected">
                        Best selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically Z-A
                      </option>
                      <option value="title-ascending">
                        Price, Low to high
                      </option>
                      <option value="title-descending">
                        Price, high to low
                      </option>
                      <option value="title-ascending">Date, old to new</option>
                      <option value="title-descending">Date, new to old</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid ">
                      <img
                        onClick={() => {
                          SetGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          SetGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                      <img
                        onClick={() => {
                          SetGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt=""
                      />

                      <img
                        onClick={() => {
                          SetGrid(7);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductBooklet grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Store;
