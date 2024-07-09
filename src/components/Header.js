import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import CartBtn from "../buttons/CartBtn";
import compare from "../images/compare.svg";
import user from "../images/user.svg";

import wish from "../images/wishlist.svg";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white  mb-0 f-tag">
                Free Shiping Of Goods below 1000 USD
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white p-tag mb-0">
                Hotline:
                <a className="text-white" href="tel: +234 8060221106">
                  +234 8060221106
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl ">
          <div className="row align-item-center">
            <div className="col-3">
              <h2>
                <Link to="/" className="text-white title">
                  REAL-HERITAGE
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group group-1">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Your Product Here..."
                  aria-label="Search Your Product Here..."
                />

                <span className="input-group-text py-3" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between gap-15">
                <div>
                  <Link
                    to="/compare"
                    className=" d-flex align-items-center  text-white gap-10"
                  >
                    <img src={compare} alt="compare" />
                    <p className="mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/wishlist"
                    className=" d-flex align-items-center  text-white gap-10"
                  >
                    <img src={wish} alt="wishlist" />
                    <p className="mb-0">
                      Favorite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/login"
                    className=" d-flex align-items-center  text-white gap-10"
                  >
                    <img src={user} alt="user" />
                    <p className="mb-0">
                      Login <br />
                      Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center  text-white gap-10"
                  >
                    <div>
                      <CartBtn />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown ">
                    <Link
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-14 d-flex align-item-center"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src="images/menu.svg" alt="" />
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </Link>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item text-white"
                          to="/store/kids"
                        >
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/store">Our Store</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
