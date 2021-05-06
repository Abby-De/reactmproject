import React from "react";
import Typewriter from "typewriter-effect";

export default function Banner() {
  return (
    <section className="p-tb-4 bg-light banner hero">
      <div className="d-flex flex-column justify-content-center align-items-center text-center">
        <div className="banner-headings">
          <h2>
            The Right{" "}
            <span className="text-yellow">
              <Typewriter
                className="d-inline"
                options={{
                  strings: ["People"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </span>
          </h2>
          <h2>
            The Right{" "}
            <span className="text-blue">
              <Typewriter
                className="d-inline"
                options={{
                  strings: ["Team"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </span>
          </h2>
          <h2>
            The Right{" "}
            <span className="text-purpule">
              <Typewriter
                className="d-inline"
                options={{
                  strings: ["Expertise"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </span>
          </h2>
        </div>
        <div className="banner-description">
          Trust our customized recruiting services to fill essential technical
          roles inside your organization. We’ll do the heavy lifting so you can
          focus on running your business.
        </div>
        <div>
          <a href="#" className="btn btn-theme mr-xs-0 mr-md-5">
            Get in touch
          </a>
          <img
            src="/images/gcp.svg"
            alt="Google Cloud Partner"
            className="gcp-img"
          />
        </div>
      </div>
    </section>
  );
}
