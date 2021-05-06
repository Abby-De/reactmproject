import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonials() {
  return (
    <section className="p-tb-4 banner testimonial">
      <div className="container">
        <div className="text-center">
          <h2>Our Clients Speak</h2>
          <p className="text-grey sub-heading">
            We have been working with clients around the world
          </p>
        </div>
        <div className="">
          <div className="row people">
            <OwlCarousel
              className="owl-theme"
              margin={10}
              items={3}
              responsive={{
                0: {
                  items: 1,
                },
                600: {
                  items: 3,
                },
                1000: {
                  items: 3,
                },
              }}>
              <div className="item">
                <div className="col-md-12 col-lg-12 item">
                  <div className="box">
                    <p className="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida. Aliquam
                      varius finibus est.
                    </p>
                  </div>
                  <div className="author">
                    <img
                      className="rounded-circle"
                      src="/images/testimonial.jpg"
                    />
                    <h5 className="name">Ben Johnson</h5>
                    <p className="title">CEO of Company Inc.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="col-md-12 col-lg-12 item">
                  <div className="box">
                    <p className="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida. Aliquam
                      varius finibus est.
                    </p>
                  </div>
                  <div className="author">
                    <img
                      className="rounded-circle"
                      src="/images/testimonial.jpg"
                    />
                    <h5 className="name">Ben Johnson</h5>
                    <p className="title">CEO of Company Inc.</p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="col-md-12 col-lg-12 item">
                  <div className="box">
                    <p className="description">
                      Aenean tortor est, vulputate quis leo in, vehicula rhoncus
                      lacus. Praesent aliquam in tellus eu gravida. Aliquam
                      varius finibus est.
                    </p>
                  </div>
                  <div className="author">
                    <img
                      className="rounded-circle"
                      src="/images/testimonial.jpg"
                    />
                    <h5 className="name">Ben Johnson</h5>
                    <p className="title">CEO of Company Inc.</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}
