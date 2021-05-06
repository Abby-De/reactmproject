import React from "react";

export default function TechnicalProficiencies() {
  return (
    <section className="banner about-features p-0">
      <img src="/images/tech-mob.jpg" className="feature-img" width="100%" />
      <div className="p-0">
        <div className="p-tb-4 p-lr-3 offset-md-5 col-md-7 feature-details">
          <div className="feature-title">
            <h2>Technical Proficiencies</h2>
            <p>
              Our team is always up to date on the tech industry's ever-evolving
              trends. We work diligently to ensure that our candidates are
              technical experts. Also, our clients understand how they can
              transform their business with top talent. Our technical recruiters
              and in-house engineers are proficient in:
            </p>
          </div>
          <div className="row feature-list">
            <div className="col-6 col-md-6 col-lg-5">
              <ul>
                <li>Full stack agile developers</li>
                <li>Mobile app development</li>
                <li>Web app development</li>
                <li>Cloud network engineer</li>
                <li>Cloud support engineer</li>
                <li>Cloud infrastructure</li>
              </ul>
            </div>
            <div className="col-6 col-md-6 col-lg-5">
              <ul>
                <li>Build a project team</li>
                <li>Support engineer</li>
                <li>Data Science</li>
                <li>Ecommerce</li>
                <li>Automation</li>
                <li>Finance</li>
              </ul>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
