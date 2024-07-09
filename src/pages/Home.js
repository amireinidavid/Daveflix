import React from "react";

import Blogcard from "../components/Blogcard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProd";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <section className=" ">
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
                  class="active"
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
                <div className="carousel-item main-banner-image position-relative active">
                  <img
                    src="./images/main-banner.jpg"
                    className="d-block w-100 "
                    alt="IPhone"
                    height="500px"
                  />
                  <div className="main-banner-content gap-30 position-absolute">
                    <h4>Our Summer Offers</h4>
                    <h5>20% Off An Fashion Wears And Electronics </h5>
                    <p>From 20th June to 15th September</p>

                    <Link className="button">See More</Link>
                  </div>
                </div>
                <div className="carousel-item p-3  main-banner-image position-relative">
                  <img
                    src="./images/main-banner-1.jpg"
                    className="d-block w-100 "
                    alt="IPhone"
                    height="500px"
                  />

                  <div className="main-banner-content position-absolute">
                    <h4>Our Summer Offers</h4>
                    <h5>20% Off An Fashion Wears And Electronics </h5>
                    <p>From 20th June to 15th September</p>
                    <Link className="button">See More</Link>
                  </div>
                </div>
                <div class="carousel-item  main-banner-image position-relative">
                  <img
                    src="./images/catbanner-01.jpg"
                    className="d-block w-100 "
                    alt="IPhone"
                    height="500px"
                  />
                  <div className="main-banner-content gap-30 position-absolute">
                    <h4>Our Summer Offers</h4>
                    <h5>20% Off An Fashion Wears And Electronics </h5>
                    <p>From 20th June to 15th September</p>

                    <Link className="button">See More</Link>
                  </div>
                </div>
                <div class="carousel-item  main-banner-image ">
                  <img
                    src="./images/catbanner-02.jpg"
                    className="d-block w-100  "
                    alt="IPhone"
                    height="500px"
                  />
                  <div className="main-banner-content gap-30 ">
                    <h4>Our Summer Offers</h4>
                    <h5>Amazing Deals Coming This Summer</h5>
                    <p>From 20th June to 15th September</p>

                    <Link className="button">See More</Link>
                  </div>
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
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services align-items-center  d-flex justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping </h6>
                    <p className="mb-0">For Products Below $5,000 </p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Suprise Offers</h6>
                    <p className="mb-0">Save Up to 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>24/7 Support</h6>
                    <p className="mb-0">Shop With An Expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable prices</h6>
                    <p className="mb-0">Get factory default Prices</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2" py-5>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music And Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Wathces</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Music And Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Wathces</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest blogs</h3>
            </div>

            <Blogcard />
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
