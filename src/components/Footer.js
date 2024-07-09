import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h3 className="mb-0 text-white sign-1">
                  Sign Up for News Letter
                </h3>
              </div>
            </div>
            <div className="col-3">
              <div className="input-group group2">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your E-mail address..."
                  aria-label="Your E-mail address..."
                />

                <span className="input-group-text p-2 " id="basic-addon2">
                  Suscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-3">Contact Us</h4>
              <address className="text-white fs-5.5">
                No 5, Aladejebi Street, Oke-Osun, Ikere-Ekiti Ekiti-State,
                Nigeria.
              </address>
              <a
                href="tel:+234 8060221106"
                className="mt-4 d-block mb-3 fs-5.5 text-white"
              >
                08060221106
              </a>
              <a
                href="mailto:realheritagecompany@gmail.com"
                className="mt-4 d-block mb-3 fs-5.5 text-white"
              >
                realheritagecompany@gmail.com
              </a>
              <div className="social-icons d-flex align-items-center gap-30 ">
                <a href="#">
                  <BsLinkedin className="text-white fs-5" />
                </a>
                <a href="#">
                  <BsGithub className="text-white fs-5" />
                </a>
                <a href="#">
                  <BsInstagram className="text-white fs-5" />
                </a>
                <a href="#">
                  <BsYoutube className="text-white fs-5" />
                </a>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Blogs </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-3">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">My Account</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-3">Quick links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Clothes</Link>
                <Link className="text-white py-2 mb-1">Wrist Watches</Link>
                <Link className="text-white py-2 mb-1">Phones</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white ">
                copyright &copy; {new Date().getFullYear()}: Produced By Real
                Heritage Company
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
