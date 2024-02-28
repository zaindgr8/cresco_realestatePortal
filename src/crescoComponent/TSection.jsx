import Link from 'next/link';
import React from 'react'

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
                <div className="bg-yellow-500 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
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
                <div className="avatar rounded-circle p-1 border ">
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
                </div>
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
                <div className="avatar rounded-circle p-1 border">
                  {/* Start Avatar Image */}
                  <Link href="/">
                    <img
                      src="assets/img/avatar/vrutika.jpeg"
                      alt=""
                      className="avatar-img rounded-circle"
                    />
                  </Link>
                  {/* /.End Avatar Image */}
                  <div className="align-items-center avatar-badge bg-yellow-500 d-flex justify-content-center position-absolute rounded-circle text-white">
                    <i className="fas fa-medal" />
                  </div>
                </div>
                <h5 className="mt-3 mb-1">
                  <Link href="/">Vrutika</Link>
                </h5>
                <div>Sales Executive</div>
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
                <div className="avatar rounded-circle p-1 border">
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
                </div>
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
                <div className="avatar rounded-circle p-1 border ">
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
                </div>
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
                <div className="avatar rounded-circle p-1 border">
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
                </div>
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
                <div className="avatar rounded-circle p-1 border">
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
                </div>
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
            <span>Brows More Agents</span>
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