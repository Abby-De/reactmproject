import React, { Component } from "react";

export default class BannerHeading extends Component {
  render() {
    return (
      <>
        <section class="p-tb-4 banner default-banner pb-0 border-0">
          <div class="container">
            <div class="text-center text-white">{this.props.children}</div>
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          class="banner-svg">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,64L80,101.3C160,139,320,213,480,229.3C640,245,800,203,960,165.3C1120,128,1280,96,1360,80L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </>
    );
  }
}
