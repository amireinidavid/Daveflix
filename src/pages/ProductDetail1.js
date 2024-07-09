import React, { useState } from "react";
import DATA from "../db/DATA1";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions/index";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetail = () => {
  const [orderedProduct] = useState(true);
  const [cartBtn, setCartBtn] = useState("Add to Cart");

  const proid = useParams();
  const proDetail = DATA.filter((x) => x.id == proid.id);
  const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch in a variable
  const dispatch = useDispatch();

  const handleCart = (product) => {
    if (cartBtn === "Add to Cart") {
      dispatch(addItem(product));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(delItem(product));
      setCartBtn("Add to Cart");
    }
  };

  const notify = () => toast("Item Sucessfuly added to cart");

  return (
    <>
      <Meta title={"Product details"} />
      <Breadcrum title={`Store/ ${product.title}`} />

      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-6 bg-white">
              <div className="carousel">
                <div>
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="3"
                        aria-label="Slide 4"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item dave active main-product-image">
                        <img src={product.img} alt="IPhone" height="500px" />
                      </div>
                      <div className="carousel-item dave">
                        <img src={product.img2} alt="IPhone" height="500px" />
                      </div>
                      <div class="carousel-item dave">
                        <img src={product.img1} alt="IPhone" height="500px" />
                      </div>
                      <div class="carousel-item dave">
                        <img src={product.img3} alt="IPhone" height="500px" />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">{product.title}</h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ {product.price}</p>
                  <div className="d-flex align-items-center gap-10">
                    {product.Rating}
                    <p className="mb-0 t-review">(2 Reviews) </p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write A Review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-15 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">{product.brand}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand:</h3>
                    <p className="product-data">{product.comp}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category:</h3>
                    <p className="product-data">{product.category}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags:</h3>
                    <p className="product-data">{product.tags}</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability:</h3>
                    <p className="product-data">{product.availability}</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size:</h3>
                    <div className="d-flex flex-wrap gap-15 ">
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        S
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        M
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        L
                      </span>
                      <span className="badge border-1 bg-white text-dark border-secondary border">
                        Xl
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column  mt-2 mb-3">
                    <h3 className="product-heading">Color:</h3>
                    <p className="product-data">{product.availability}</p>
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row  mt-2 mb-3">
                    <h3 className="product-heading">Quantity:</h3>
                    <div>
                      <input
                        type="number"
                        name=""
                        className="form-control"
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <div onClick={notify}>
                        <button
                          className="button signup"
                          onClick={() => handleCart(product)}
                        >
                          Add To Cart
                        </button>
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

                      <button
                        type="submit"
                        onClick={notify}
                        className="button border-0"
                      >
                        Buy it Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex gap-15 align-items-center">
                    <div>
                      <a href="">
                        <TbGitCompare className="ms-5 me-2" /> Add To Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="ms-5 me-2" />
                        Add To WishList
                      </a>
                    </div>
                  </div>
                  <div className="d-flex gap-15 flex-column  my-3">
                    <h3 className="product-heading">Shipping And Returns:</h3>
                    <p className="product-data">
                      Free Shipping and returns on all orders! <br />
                      We Ship all Nigeria domestic orders within
                      <b>5-10 hours business day</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white  p-3">
                <h4>Description</h4>
                <p>{product.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-wrapper  home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div id="review" className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-3">Customer Reviews</h4>
                    <div className="d-flex gap-10 align-items-center">
                      <ReactStars
                        count={5}
                        size={22}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on two reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href="#"
                      >
                        Write A Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form  py-4">
                  <h4>Write A Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <ReactStars
                      count={5}
                      size={22}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <div>
                      <textarea
                        name=""
                        className="w-100 form-control"
                        id=""
                        cols=""
                        placeholder="comments"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-10 align-1tems-center">
                      <h6 className="mb-0">David</h6>
                      <ReactStars
                        count={5}
                        size={22}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Voluptate voluptatum, enim molestias aliquam deserunt
                      inventore laudantium necessitatibus, magnam sequi modi
                      quibusdam laborum laboriosam id distinctio explicabo
                      molestiae aliquid. Assumenda, recusandae.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="featured-wrapper d-flex f py-5 home-wrapper-2">
        <div className="container-xxl ">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
