"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { PiBriefcaseFill } from "react-icons/pi";
import localFont from "next/font/local";

const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "../fonts/Roboto-Black.ttf" });

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Carousel = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 6,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/1.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className={stroma.className}>Mohammad Azam Tariq</span>
            </Link>
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

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/2.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className={stroma.className}>Sabrine Touati</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Manager
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971545666510
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
     
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/5.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className={stroma.className}>Waleed Khan</span>
            </Link>
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/6.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className={stroma.className}>Doua Reina</span>
            </Link>
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}

      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/7.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className={stroma.className}>Osama Khalifa</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971527608166
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/8.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">
              <span className={stroma.className}>Shifa</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971525347803
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
    </OwlCarousel>
  );
};
export default Carousel;
