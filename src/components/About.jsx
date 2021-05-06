import React from "react";
import BannerHeading from "./includes/BannerHeading";
import Establishment from "./About/Establishment";
import TechnicalProficiencies from "./About/TechnicalProficiencies";
import Hiring from "./About/Hiring";

export default function About() {
  return (
    <>
      <BannerHeading>
        <h1>About us</h1>
        <p class="sub-heading">Building a relationship between IT Services</p>
      </BannerHeading>
      <Establishment />
      <TechnicalProficiencies />
      <Hiring />
    </>
  );
}
