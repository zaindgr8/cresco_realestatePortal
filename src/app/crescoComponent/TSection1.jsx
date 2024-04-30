"use client";
import Link from "next/link";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { PiBriefcaseFill } from "react-icons/pi";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const TSection = () => {
  return (
    <>
      <div className="py-5 bg-gray-100">
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div
                className="section-header text-center mb-5"
                data-aos="fade-down"
              >
                {/* Start Subtitle */}
                <div
                  id="agents"
                  className="#DAB852 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900"
                >
                  Agents
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Meet The Faces Behind
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Discover luxury real estate in Dubai with our expert team.
                  Specializing in opulent living spaces
                  <br className="d-none d-lg-block" /> and trusted projects, we
                  offer transparency, integrity, and excellence.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>

          <div className="row g-4 justify-content-center">
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={300}
              >
                <button className="avatar rounded-lg p-1 border ">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/az4.jpeg"
                      alt=""
                      className="avatar-img rounded-lg"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                </button>
                <div className="flex items-center flex-col">
                  <h5 className="mt-3 mb-1">
                    <Link href="/">Mohammad Azam Tariq</Link>
                  </h5>
                  <div className="flex items-center gap-x-2">
                    <PiBriefcaseFill />
                    Sales Director
                  </div>
                  <div className="text-sm flex gap-x-2 items-center">
                    <FaPhone />
                    +971521307749
                  </div>
                </div>
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={400}
              >
                <button className="avatar rounded-lg p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/wld.jpeg"
                      alt=""
                      className="avatar-img rounded-lg"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                </button>

                <div className="flex items-center flex-col">
                  <h5 className="mt-3 mb-1">
                    <Link href="/">Waleed Khan</Link>
                  </h5>
                  <div className="flex items-center gap-x-2">
                    <PiBriefcaseFill />
                    Sales Consultant
                  </div>
                  <div className="text-sm flex gap-x-2 items-center">
                    <FaPhone />
                    +971521543532
                  </div>
                </div>
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={500}
              >
                <button className="avatar rounded-lg p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/umer.jpg"
                      alt=""
                      className="avatar-img rounded-lg"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                </button>
                <div className="flex items-center flex-col">
                  <h5 className="mt-3 mb-1">
                    <Link href="/">Waleed Khan</Link>
                  </h5>
                  <div className="flex items-center gap-x-2">
                    <PiBriefcaseFill />
                    Sales Consultant
                  </div>
                  <div className="text-sm flex gap-x-2 items-center">
                    <FaPhone />
                    +971585251995
                  </div>
                </div>
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={600}
              >
                <button className="avatar rounded-lg p-1 border ">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/gulli.jpg"
                      alt=""
                      className="avatar-img rounded-lg"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                </button>
                <div className="flex items-center flex-col">
                  <h5 className="mt-3 mb-1">
                    <Link href="/">Gulraiz Naveed</Link>
                  </h5>
                  <div className="flex items-center gap-x-2">
                    <PiBriefcaseFill />
                    Sales Manager
                  </div>
                  <div className="text-sm flex gap-x-2 items-center">
                    <FaPhone />
                    +971551379008
                  </div>
                </div>
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={700}
              >
                <button className="avatar rounded-lg p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/mrgo.png"
                      alt=""
                      className="avatar-img rounded-lg"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                </button>
                <div className="flex items-center flex-col">
                  <h5 className="mt-3 mb-1">
                    <Link href="/">Margault Pearl</Link>
                  </h5>
                  <div className="flex items-center gap-x-2">
                    <PiBriefcaseFill />
                    Off-Plan Consultant
                  </div>
                  <div className="text-sm flex gap-x-2 items-center">
                    <FaPhone />
                    +971521021429
                  </div>
                </div>
              </div>
              {/* /.End Agent Card */}
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2">
              {/* Start Agent Card */}
              <div
                className="agent-card text-center"
                data-aos="fade"
                data-aos-delay={800}
              >
                <button className="avatar rounded-lg p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/dua.jpeg"
                      alt=""
                      className="avatar-img rounded-lg"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                </button>
                <div className="flex items-center flex-col">
                  <h5 className="mt-3 mb-1">
                    <Link href="/">Dua Reina</Link>
                  </h5>
                  <div className="flex items-center gap-x-2">
                    <PiBriefcaseFill />
                    Sales Executive
                  </div>
                  <div className="text-sm flex gap-x-2 items-center">
                    <FaPhone />
                    +971544834967
                  </div>
                </div>
              </div>
              {/* /.End Agent Card */}
            </div>
          </div>
          {/* Start Button */}

          {/* /.End Button */}
        </div>
      </div>
    </>
  );
};

export default TSection;
