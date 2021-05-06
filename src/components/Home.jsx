import React from "react";

import Banner from "./Home/Banner";
import VideoCta from "./Home/VideoCta";
import BrackitReport from "./Home/BrackitReport";
import Cta from "./Home/Cta";
import ExpertsSpeciality from "./Home/ExpertsSpeciality";
import Testimonials from "./Home/Testimonials";
import ImageCta from "./Home/ImageCta";

export default function Home() {
  return (
    <>
      <Banner />
      <VideoCta />
      <BrackitReport />
      <Cta />
      <ExpertsSpeciality />
      <Testimonials />
      <ImageCta />
    </>
  );
}
