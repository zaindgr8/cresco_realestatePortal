import React from 'react'

const CeoMessage = () => {
  return (
    <div className="p-5 about-text align-items-center g-4 justify-content-between row">
      <div className="col-md-12 col-lg-7">
        <div className="row g-3 g-sm-4 align-items-center">
          {/* Image */}
          <div className="col-6">
            <div className="position-relative">
              <div className="line-shape" />
              <img
                src="assets/img/about/1.jpg"
                className="img-fluid rounded-3 position-relative"
                alt=""
              />
            </div>
          </div>
          <div className="col-6">
            <div className="row g-3 g-sm-4">
              {/* Image */}
              <div className="col-12">
                <img
                  src="assets/img/about/2.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
              {/* Image */}
              <div className="col-12">
                <img
                  src="assets/img/about/3.jpg"
                  className="img-fluid rounded-3"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-12 col-lg-5 ps-xxl-5">
        <div className="text-block">
          <h6 className="fs-14 fw-bold heading-sm l-spacing-1 position-relative text-gray-900 text-uppercase">
            CEO Message
          </h6>
          <h2 className="mb-4">
            Why it's essential for you to connect with us?
          </h2>
          <p className="mb-4">
            At Cresco, we strive to inspire greatness in every aspect of our
            work.With years of experience and a steadfast commitment to
            excellence, our team embodies this ethos daily. We're deeply
            grateful for your trust and partnership, and we're committed to
            continuing to serve you with integrity and dedication.
          </p>
          <ul className="list-checked mb-9 mb-md-10 ps-0">
            <li>
              Our years of experience ensure unmatched insight and results.
            </li>
            <li>We tailor our approach to meet your unique needs.</li>
            <li>
              We're committed to staying ahead with cutting-edge strategies.
            </li>
          </ul>
          <hr className="mt-5" />
          <blockquote className="blockquote quote-text">
            <p className="fst-italic mb-0 text-yellow-500">
              “Real estate isn't just about buying a property; it's about
              investing in possibilities, planting roots, and building futures.”
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