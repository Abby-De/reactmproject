import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function VideoCta() {
  return (
    <section className="p-tb-4 banner video-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 mb-3 mb-md-0">
            <OwlCarousel
              className="owl-theme"
              margin={10}
              items={1}
              lazyLoad={true}>
              <div className="item">
                <video
                  className="w-100"
                  controls="true"
                  autoPlay="true"
                  src="https://plus-safe-life--pr10-developer-cmwnto25.web.app/Slides/2nd%20Slide/Comp%201_1.mp4"></video>
              </div>
              <div className="item">
                <video
                  className="w-100"
                  src="https://plus-safe-life--pr10-developer-cmwnto25.web.app/Slides/2nd%20Slide/Comp%201_1.mp4"
                  controls></video>
              </div>
              <div className="item">
                <video
                  className="w-100"
                  src="https://plus-safe-life--pr10-developer-cmwnto25.web.app/Slides/2nd%20Slide/Comp%201_1.mp4"
                  controls></video>
              </div>
              <div className="item">
                <video
                  className="w-100"
                  src="https://plus-safe-life--pr10-developer-cmwnto25.web.app/Slides/2nd%20Slide/Comp%201_1.mp4"
                  controls></video>
              </div>
              <div className="item">
                <video
                  className="w-100"
                  src="https://plus-safe-life--pr10-developer-cmwnto25.web.app/Slides/2nd%20Slide/Comp%201_1.mp4"
                  controls></video>
              </div>
            </OwlCarousel>
          </div>
          <div className="col-md-5 d-flex flex-column justify-content-center text-center text-md-left">
            <h2>See Us in Action</h2>
            <p className="text-grey">
              We simplify the hiring process by matching high-quality recruits
              with your organizational needs.
            </p>
            <div>
              <a href="#" className="btn btn-theme">
                See how it works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
