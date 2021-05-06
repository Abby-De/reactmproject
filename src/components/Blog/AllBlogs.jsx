import React from "react";
import { Link } from "react-router-dom";

export default function AllBlogs() {
  return (
    <section className="p-tb-4 banner blogs">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="./images/blogdetailsbg.jpg"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h6>Blog Title</h6>
                <h5 className="card-title">
                  <Link to="/single-blog">
                    Lorem Ipsum is simply dummy text
                  </Link>
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <Link to="/single-blog" className="card-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="card">
              <img
                src="./images/blogdetailsbg.jpg"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h6>Blog Title</h6>
                <h5 className="card-title">
                  <Link to="/single-blog">
                    Lorem Ipsum is simply dummy text
                  </Link>
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <Link to="/single-blog" className="card-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3 mt-md-0">
            <div className="card">
              <img
                src="./images/blogdetailsbg.jpg"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h6>Blog Title</h6>
                <h5 className="card-title">
                  <Link to="/single-blog">
                    Lorem Ipsum is simply dummy text
                  </Link>
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <Link to="/single-blog" className="card-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card">
              <img
                src="./images/blogdetailsbg.jpg"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h6>Blog Title</h6>
                <h5 className="card-title">
                  <Link to="/single-blog">
                    Lorem Ipsum is simply dummy text
                  </Link>
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <Link to="/single-blog" className="card-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card">
              <img
                src="./images/blogdetailsbg.jpg"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h6>Blog Title</h6>
                <h5 className="card-title">
                  <Link to="/single-blog">
                    Lorem Ipsum is simply dummy text
                  </Link>
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <Link to="/single-blog" className="card-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-3">
            <div className="card">
              <img
                src="./images/blogdetailsbg.jpg"
                className="card-img-top"
                alt="image"
              />
              <div className="card-body">
                <h6>Blog Title</h6>
                <h5 className="card-title">
                  <Link to="/single-blog">
                    Lorem Ipsum is simply dummy text
                  </Link>
                </h5>
                <p className="card-text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard...
                </p>
                <Link to="/single-blog" className="card-link">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
