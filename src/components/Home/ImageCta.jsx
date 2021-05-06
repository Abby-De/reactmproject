import React from "react";

export default function ImageCta() {
  return (
    <section className="p-tb-4 banner">
      <div className="container">
        <div className="row">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <div className="col-md-6 text-center d-none d-md-block">
              <img
                src="/images/outsource.svg"
                alt="image"
                className="img-fluid"
                width="500"
              />
            </div>
            <div className="col-md-6 text-center text-md-left">
              <h2 className="mb-4 font-weight-bold">Outsource Your Project</h2>
              <p className="text-grey">
                Complex challenges require forward-thinking, creative IT
                solutions. Our experts use the latest technology to develop
                solutions that can be easily implemented into any business
                strategy.
              </p>
              <a href="#" className="btn btn-theme">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
