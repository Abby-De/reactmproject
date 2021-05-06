import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-color">
      <div className="container py-4">
        <div className="row py-4">
          <div className="col-lg-4 col-md-4 mb-4 mb-lg-0">
            <img
              src="./images/footer-logo.png"
              alt=""
              width="180"
              className="mb-3 footer-logo"
            />
            <p className="font-italic text-muted">
              Copyright &copy; 2021 bracket, All rights reserved.
            </p>
          </div>
          <div className="col-lg-2 col-md-2 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4 text-white">Company</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <Link to="/about" className="text-muted">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/blogs" className="text-muted">
                  Blogs
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Contact us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Pricing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-2 mb-4 mb-lg-0">
            <h6 className="text-uppercase mb-4 text-white">Support</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Help center
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Terns of service
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Legal
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 mb-lg-0">
            <h6 className="text-uppercase mb-4 text-white">Stay up to date</h6>
            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
              itaque temporibus.
            </p>
            <div className="p-1 rounded border">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your email address"
                  aria-describedby="button-addon1"
                  className="form-control border-0 shadow-0"
                />
                <div className="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    className="btn btn-link">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
            <ul className="list-inline mt-4 social-icons">
              <li className="list-inline-item">
                <a href="#" target="_blank" title="twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="facebook">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="instagram">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="pinterest">
                  <i className="fa fa-pinterest"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="vimeo">
                  <i className="fa fa-vimeo"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
