"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const links = [
    { href: '/', text: 'Home 1' },
    { href: '/home-2', text: 'Home 2' },
    { href: '/home-3', text: 'Home 3' },
    { href: '/home-3-header-dark', text: 'Home 3 (Header dark)' },
    { href: '/properties-list', text: 'Properties List' },
    { href: '/properties-grid', text: 'Properties Grid' },
    { href: '/property-details', text: 'Property Details 1' },
    { href: '/property-details-2', text: 'Property Details 2' },
    { href: '/about', text: 'About Us' },
    { href: '/agent-list', text: 'Agents List' },
    { href: '/agent-grid', text: 'Agents Grid' },
    { href: '/agent-details', text: 'Agent Details' },
    { href: '/post-property', text: 'Post Property' },
    { href: '/locations', text: 'Locations' },
    { href: '/contact', text: 'Contact Us' },
    { href: '/blog-1', text: 'Blog 1' },
    { href: '/blog-2', text: 'Blog 2' },
    { href: '/blog-details', text: 'Blog Details' },
    { href: '/signin', text: 'Sign In' },
    { href: '/signup', text: 'Sign Up' },
    { href: '/forgot-password', text: 'Forgot Password' },
    { href: '/two-factor-auth', text: 'Two factor authentication' },
    { href: '/terms-conditions', text: 'Terms & Conditions' },
    { href: '/not_found', text: '404 Page' },
    { href: '/505', text: '505 Page' },
    { href: '/style-guide', text: 'Style Guide' },
  ];
  import localFont from "next/font/local";

  const stroma = localFont({ src: "./fonts/Stroma-Regular.ttf" });
  const roboto = localFont({ src: "./fonts/Roboto-Black.ttf" });
  
export default function Header() {
  
    const [hasLogo, setHasLogo] = useState(false);
    const path=usePathname()
    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (scroll >= 81) {
                setHasLogo(true);
            } else {
                setHasLogo(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <>
        {/* Start Topbar */}
        {/* <div className="d-none d-lg-block topbar-bg bg-gray-900 text-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-lg-3 col-xl-6">
                <Link href="/" className="headerLogo">
                  <img
                    className="h-20 w-[15vh] mb-2"
                    src="assets/img/clogo.png"
                  />
                </Link>
              </div>
              <div className="col-md-8 col-lg-9 col-xl-8 d-flex justify-content-end align-items-center">
                <PiFacebookLogoFill className="w-[4vh] h-[4vh] ms-4" />
                <BiLogoInstagramAlt className="w-[4vh] h-[4vh] ms-4" />
                <AiFillYoutube className="w-[4vh] h-[4vh] ms-4" />
              </div>
            </div>
          </div>
        </div> */}
        {/* /.End Topbar */}
        {/* Start Navbar */}
        <div
          // className={
          //   hasLogo
          //     ? "has-logo navbar-wrap sticky-top"
          //     : "no-logo navbar-wrap sticky-top"
          // }
          className={
            hasLogo
              ? "has-logo navbar-wrap "
              : "no-logo navbar-wrap sticky-top"
          }
        >
          <div className="container-lg mt-5 nav-container position-absolute ">
            <nav className="custom-navbar  navbar-expand-lg ml-16">
              {/* Start Navbar Brand */}
              {/* <Link className="navbar-brand pe-3 pe-sm-4 py-0" href="/">
                <img
                  className="logo-dark mb-3"
                  src="assets/img/logo2.png"
                  alt=""
                />
                <img
                  className="logo-white mb-3"
                  src="assets/img/logo2.png"
                  alt=""
                />
              </Link> */}
              {/* End Navbar Brand */}
              {/* Start Navbar Collapse */}
              <div className="navbar-collapse" id="navbarSupportedContent">
                {/* Start Navbar Collapse Header */}
                <div className="align-items-center border-bottom d-flex d-lg-none justify-content-between mb-3 navbar-collapse__header pb-3">
                  {/* Start Brand Logo For Mobile */}
                  <div className="collapse-brand flex-shrink-0">
                    <Link href="/">
                      <img src="assets/img/us.png" alt="" />
                    </Link>
                  </div>
                  {/* End Brand Logo For Mobile */}
                  {/* Start Collapse Close Button */}
                  <div className="flex-grow-1 ms-3 text-end">
                    <button
                      type="button"
                      className="bg-transparent border-0 collapse-close p-0 position-relative"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span></span> <span></span>
                    </button>
                  </div>
                  {/* End Collapse Close Button */}
                </div>
                {/* End Navbar Collapse Header */}
                <ul className="items-center justify-center container flex gap-x-5">
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#"
                      role="button"
                    >
                      Home
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-brand pe-3 pe-sm-4 py-0" href="/">
                      <img
                        width={100}
                        className="logo-dark"
                        src="assets/img/logo2.png"
                        alt=""
                      />
                      <img
                        className="logo-white"
                        src="assets/img/logo2.png"
                        alt=""
                      />
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-white text-xl  hover:text-yellow-500 "
                      href="#"
                    >
                      Projects
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className=" text-white text-xl hover:text-yellow-500"
                      href="#"
                    >
                      Properties
                    </Link>
                  </li>
                  <li className={stroma.className}>
                    <Link
                      className="text-xl text-white hover:text-yellow-500"
                      href="#"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/*  /. End Navbar Collapse */}
              <div className="d-flex gap-1 ms-lg-5">
                {/* Start Cart Button */}
                {/* <Link
                  href="/"
                  data-bs-toggle="modal"
                  data-bs-target="#cartEmpty"
                  className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
                >
                  <span className="ms-2 text-gray-500 text-md">
                    CRESCO Real Estate
                  </span>
                </Link> */}
                {/* For Mobile */}
                <Link
                  href="/"
                  className="btn btn-primary d-none d-sm-inline-block d-xl-none"
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      </>
    );
}