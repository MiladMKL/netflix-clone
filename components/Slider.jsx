import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <section className="relative shadow-2xl mx-auto">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={9000}
      >
        <div>
          <img loading="lazy" src="/images/slide1.jpg" alt="Slide1" />
        </div>
        <div>
          <img loading="lazy" src="/images/slide2.jpg" alt="Slide2" />
        </div>
        <div>
          <img loading="lazy" src="/images/slide3.jpg" alt="Slide3" />
        </div>
        <div>
          <img loading="lazy" src="/images/slide4.jpg" alt="Slide4" />
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
