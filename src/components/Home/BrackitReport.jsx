import React from "react";

export default function BrackitReport() {
  return (
    <>
      <section className="p-tb-4 banner service">
        <div className="container-fluid">
          <div className="text-center">
            <h2>Brackit Fit Index Report</h2>
            <p className="text-grey sub-heading">
              Our supervised lab assessments let candidates demonstrate how they
              would apply their skills to real-time situations.
            </p>
          </div>
          <div className="row mt-2 mt-md-4">
            <div className="col p-0"></div>
            <div className="col-md-10">
              <div className="row">
                <div className="custom-card text-center">
                  <div className="box">
                    <img
                      className="img-fluid"
                      src="/images/file.svg"
                      alt="Card image cap"
                    />
                    <div className="box-title">
                      <h4>Invigilated Lab Assessments</h4>
                    </div>
                    <div className="box-text">
                      <span>
                        Our supervised lab assessments let candidates
                        demonstrate how they would apply their skills to
                        real-time situations.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="custom-card text-center">
                  <div className="box">
                    <img
                      className="img-fluid"
                      src="/images/video-interview.svg"
                      alt="Card image cap"
                    />
                    <div className="box-title">
                      <h4>Video Interview</h4>
                    </div>
                    <div className="box-text">
                      <span>
                        Get to know each candidate on a personal level with
                        video interviews that highlight their personality.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="custom-card text-center mt-3 mt-md-0">
                  <div className="box">
                    <img
                      className="img-fluid"
                      src="/images/behaviour.svg"
                      alt="Card image cap"
                    />
                    <div className="box-title">
                      <h4>Behavioural And Ei Index</h4>
                    </div>
                    <div className="box-text">
                      <span>
                        Find your next great fit based on behavioral and
                        emotional intelligence assessments that accurately
                        predict a candidate’s chances for success at your
                        company.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-0"></div>
          </div>
        </div>
      </section>
      <section className="p-tb-4 banner reports">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
              <div className="col-md-6 text-center text-md-left">
                <h2 className="mb-4">
                  To Maintain
                  <span className="text-blue text-decoration-underline">
                    Transparency
                  </span>
                  <br />
                  We Share These Index Reports With Your Team On Request
                </h2>
                <p className="text-grey">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
              <div className="col-md-6 text-center d-none d-md-block">
                <img
                  src="/images/index_report.png"
                  alt="image"
                  className="img-fluid"
                  width="350"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
