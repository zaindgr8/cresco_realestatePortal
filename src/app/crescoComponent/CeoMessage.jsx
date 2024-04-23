import React from 'react'
import localFont from "next/font/local";
const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
const roboto = localFont({ src: "../fonts/Roboto-Black.ttf" });

const CeoMessage = () => {
  return (
    <div className="px-5 align-items-center row bg-[#242726]">
      <div className="col-md-12 col-lg-5">
        <div className="row  align-items-center">
            <div className="position-relative">
              <div className="" />
              <img
                src="assets/img/about/CEO.png"
                className="img-fluid position-relative"
                alt=""
              />
            </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-5 xl:ml-20 mt-5 ps-xxl-5" id="getintouch">
        <div className="text-block">
          <h6 className="heading-sm l-spacing-1 position-relative text-white text-uppercase">
            <span className={stroma.className}>Leadership Perspective</span>
          </h6>
          <h2 className=" text-white">
            <span className={roboto.className}>
              Why it's essential for you to connect with us?
            </span>
          </h2>
          <span className={stroma.className}>
            <p className="mb-4 text-white">
              At Cresco, we strive to inspire greatness in every aspect of our
              work.With years of experience and a steadfast commitment to
              excellence, our team embodies this ethos daily. We're deeply
              grateful for your trust and partnership, and we're committed to
              continuing to serve you with integrity and dedication.
            </p>
            <ul className="list-checked mb-9 mb-md-10 ps-0 text-white">
              <li>
                Our years of experience ensure unmatched insight and results.
              </li>
              <li>We tailor our approach to meet your unique needs.</li>
              <li>
                We're committed to staying ahead with cutting-edge strategies.
              </li>
            </ul>
          </span>
          <hr className="mt-5" />
          <blockquote className="blockquote quote-text">
            <p className=" mb-0 text-yellow-500">
              <span className={roboto.className}>
                “Real estate isn't just about buying a property; it's about
                investing in possibilities, planting roots, and building
                futures.”
              </span>
            </p>
            <cite className="fs-14 fw-semibold quote-attribution text-dark">
              — Umer Shauket
            </cite>
            <div className="mt-3 signature">
              {/* <img src="assets/img/sig.png" className='' alt="" /> */}
            </div>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default CeoMessage