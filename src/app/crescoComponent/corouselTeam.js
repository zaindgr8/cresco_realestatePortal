"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { PiBriefcaseFill } from "react-icons/pi";

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
              src="assets/img/avatar/az.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}

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

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/dua.jpeg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/gulli.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/mrgo.png"
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/wld.jpeg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/umer.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">Omer Akram</Link>
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
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}

      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4">
          <div className="w-full h-[45vh] overflow-hidden">
            <img
              src="assets/img/avatar/umer2.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">Omer Aladheem</Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Executive
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971542188244
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
              src="assets/img/avatar/shmr1.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/">Sabrine Touti</Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <PiBriefcaseFill />
            Sales Manager
          </div>
          <div className="text-sm flex gap-x-2 items-center">
            <FaPhone />
            +971542188244
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
    </OwlCarousel>
  );
};
export default Carousel;
