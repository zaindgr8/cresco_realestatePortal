"use client"
import Link from 'next/link';
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";

const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "../fonts/Roboto-Black.ttf" });

const Ssection = () => {
  return (
    <div className="angled bg-white py-5 wrapper lower-start">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {/* Start Section Header Title */}
            <div
              className="section-header text-center mb-5"
              data-aos="fade-down"
            >
              {/* Start Subtitle */}

              <div className="bg-yellow-400 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                <p className={roboto.className}>About Us</p>
              </div>

              {/* /. End Subtitle */}
              {/* Start Section Header title */}
              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                <p className={stroma.className}>
                  See our new projects and agents list
                </p>
              </h2>
              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                <span className={roboto.className}>
                  Cresco Real Estate specializes in property transactions in
                  Dubai, offering expertise in both buying and selling. Our
                  comprehensive list of projects and authorized agents ensures a
                  seamless experience for our clients, providing them with a
                  wide selection to choose from.
                </span>
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 d-flex">
            <div className="bg-yellow-400 text-white p-4 p-lg-5 rounded-3 w-100 flex-fill">
              <span className={roboto.className}>
                We specialize in trusted high-rise projects in Dubai,
                prioritizing excellence and client trust.
              </span>
              <button
                type="button"
                className="border-1 p-2 rounded-lg text-white hover:text-yellow-600 hover:bg-gray-700 bg-gray-900 mt-3 hstack gap-2"
              >
                <Link href="#projects">
                  <span className={stroma.className}>View New Projects</span>
                </Link>
                <span className="vr" />
                <i className="fa-arrow-right fa-solid fs-14" />
              </button>
            </div>
          </div>
          <div className="col-md-6 d-flex">
            <div className="bg-dark p-4 p-lg-5 rounded-3 w-100 flex-fill">
              <h5 className="fs-18  text-white">
                <span className={roboto.className}>
                  We exclusively employ top-notch and trustworthy realtors to
                  guide you every step of the way.
                </span>
              </h5>
              <Link
                href="#agents"
                className="btn text-white bg-yellow-400 hover:bg-yellow-600 mt-3 d-inline-flex hstack gap-2 "
              >
                <span className={stroma.className}>View Agents</span>
                <span className="vr" />
                <i className="fa-arrow-right fa-solid fs-14" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ssection