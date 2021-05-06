import React from "react";

export default function Hiring() {
  return (
    <section className="p-tb-4 banner service about-hiring">
      <div className="container">
        <div className="text-left text-md-center">
          <h2>We Make Hiring Easy for You!</h2>
          <p className="text-grey sub-heading">
            Looking to work with us? We can help you find the right candidate.
            Just fill this simple and easy form and you are one step closer to
            hiring the right fit, guaranteed.
          </p>
        </div>
        <div className="row mt-2 mt-md-5">
          <div className="col-md-4">
            <div className="card">
              <div className="card-block count-1">
                <h3 className="card-title">Talk to Experts</h3>
                <p className="card-text">
                  One of our industry experts will work with you to understand
                  your vision, technical needs, and team dynamics.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-block count-2">
                <h3 className="card-title">Work with Top Talent</h3>
                <p className="card-text">
                  Within days we will introduce you to the right talent for your
                  project. An average time to match is under 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-block count-3">
                <h3 className="card-title">Find the Right Fit</h3>
                <p className="card-text">
                  Work with your new team member on a trial basis (pay only if
                  satisfied) to ensure you hire the right people for the job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
