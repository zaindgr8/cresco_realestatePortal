import Dropdown from "@/components/form-control-two";
import React from "react";
import localFont from "next/font/local";

const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "../fonts/Roboto-Black.ttf" });

const FSection = () => {
  return (
    <>
      <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
        <img
          src="assets/img/png-img/section-bg.png"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 top-0"
        />
        {/* Start Oblique */}
        <div className="">
          {/* <img
            src="assets/img/senior1.jpeg"
            alt=""
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          /> */}
          <video
            autoPlay
            muted
            loop
            src="assets/img/Website.mp4"
            className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
          />
          {/* <Slideshow className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0" /> */}
        </div>

        {/* /.End Oblique */}
        <div className="container text-center flex items-center justify-center position-relative">
          <div>
            <div>
              {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
              {/* <div className=" #DAB852 w-[35vh] font-bold text-white d-inline-block fw-medium mb-5 text-lg rounded-pill section-header__subtitle text-capitalize">
                Cresco Real Estate
              </div> */}
              <h1 className=" hero-header_title text-white fw-bold mb-5 text-5xl leading-[8vh]">
                <span className={stroma.className}>
                  Unlock The Door <br /> To Your Dream Home
                </span>
              </h1>
              {/* Start Main Search Content */}
              <Dropdown />
              {/* /.End Main Search Content */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FSection;
