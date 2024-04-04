"use client"
import Link from 'next/link';
import React from 'react'

const TSection = () => {
  const handleClickAzam = () => {
    window.open(`https://wa.me/${+971521307749}`, "_blank");
  };
  const handleClickWaleed = () => {
    window.open(`https://wa.me/${+971521543532}`, "_blank");
  };
  const handleClickOmerAkram = () => {
    window.open(`https://wa.me/${+971585251995}`, "_blank");
  };
  const handleClickGulli = () => {
    window.open(`https://wa.me/${+971551379008}`, "_blank");
  };
  
  const handleClickMargo = () => {
    window.open(`https://wa.me/${+971521021429}`, "_blank");
  };
  const handleClickDua = () => {
    window.open(`https://wa.me/${+971544834967}`, "_blank");
  };
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
                  className="bg-yellow-500 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900"
                >
                  Agents
                </div>
                {/* /. End Subtitle */}
                {/* Start Section Header title */}
                <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                  Meet Our Realtors
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
                <button
                  onClick={handleClickAzam}
                  className="avatar rounded-circle p-1 border "
                >
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/az4.jpeg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </button>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Mohammad Azam Tariq</Link>
                </h5>
                <div>Sales Director</div>
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
                <button onClick={handleClickWaleed} className="avatar rounded-circle p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/wld.jpeg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </button>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Waleed Khan</Link>
                </h5>
                <div>Sales Consultant</div>
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
                <button onClick={handleClickOmerAkram} className="avatar rounded-circle p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/umer.jpg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </button>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Omer Akram</Link>
                </h5>
                <div>Sales Manager</div>
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
                <button onClick={handleClickGulli} className="avatar rounded-circle p-1 border ">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/gulli.jpg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </button>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Gulraiz Naveed</Link>
                </h5>
                <div>Sales Manager</div>
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
                <button onClick={handleClickMargo} className="avatar rounded-circle p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/mrgo.png"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </button>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Margault Pearl</Link>
                </h5>
                <div>Off-Plan Consultant</div>
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
                <button onClick={handleClickDua} className="avatar rounded-circle p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/dua.jpeg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </button>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Dua Reina</Link>
                </h5>
                <div>Property Consultant</div>
              </div>
              {/* /.End Agent Card */}
            </div>
          </div>
          {/* Start Button */}
          <button
            type="button"
            className="btn bg-gray-900 text-white hover:bg-gray-700 btn-lg hstack mx-auto mt-5 gap-2"
            data-aos="fade-up"
          >
            <Link href="/agent-list">
              <span>Brows More Agents</span>
            </Link>
            <span className="vr" />
            <i className="fa-arrow-right fa-solid fs-14" />
          </button>
          {/* /.End Button */}
        </div>
      </div>
    </>
  );
}

export default TSection