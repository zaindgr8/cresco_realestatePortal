import Dropdown from '@/components/form-control-two';
import React from 'react'

const FSection = () => {
  return (
    <div className="align-items-center d-flex hero-header hero-header__two overflow-hidden position-relative">
      <img
        src="assets/img/png-img/section-bg.png"
        alt=""
        className="h-100 object-fit-cover position-absolute w-100 top-0"
      />
      {/* Start Oblique */}
      <div className="d-md-block d-none h-100 oblique overflow-hidden position-absolute top-0">
        <img
          src="assets/img/header/cresco.gif"
          alt=""
          className="h-100 object-fit-cover position-absolute w-100 oblique-image top-0"
        />
      </div>
      {/* /.End Oblique */}
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-10 col-xl-8">
            {/* <p class="title-sm">BEAT TRAFFIC JAMS AND CLINIC QUEUES.</p> */}
            <div className="bg-yellow-500 text-white d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize">
              Welcome To CRESCO
            </div>
            <h1 className="hero-header_title fw-bold mb-5 display-3">
              Find Your Dream <br /> Property with us at <br/> CRESCO Real Estate
            </h1>
            {/* Start Main Search Content */}
            <Dropdown />
            {/* /.End Main Search Content */}
          </div>
        </div>
        <div className="align-items-center g-xl-5 gx-3 gy-3 row mt-3">
          <div className="col-auto">
            <div className="align-items-center d-flex justify-content-center justify-content-md-start">
              <div className="work-icon me-3">
                <i className="fas fa-map-marker-alt fs-33 text-yellow-400" />
              </div>
              <div className="media-body">
                <h5 className="fs-18 fw-semibold mb-0 work-title">
                  Search location
                </h5>
                {/* <div class="work-sub_title text-muted">Lorem Ipsum is simply</div> */}
              </div>
            </div>
          </div>
          <div className="col-auto fs-18 p-0 text-primary">
            <i className="fa-solid text-yellow-400 fa-chevron-right" />
          </div>
          {/*/.work-col*/}
          <div className="col-auto">
            <div className="align-items-center d-flex justify-content-center justify-content-md-start">
              <div className="work-icon me-3">
                <i className="fas fa-calendar-alt fs-28 text-yellow-400" />
              </div>
              <div className="media-body">
                <h5 className="fs-18 fw-semibold mb-0 work-title">
                  Make an appointment
                </h5>
                {/* <div class="work-sub_title text-muted">It is a long established fact</div> */}
              </div>
            </div>
          </div>
          <div className="col-auto fs-18 p-0 text-primary"></div>
          {/*/.work-col Dream House*/}

          {/*/.work-col*/}
        </div>
        <div className="col-auto py-4">
          <div className="align-items-center d-flex justify-content-center justify-content-md-start">
            <div className="work-icon me-3">
              <i className="fa-solid text-yellow-400 fa-chevron-right mr-5" />
              <i className="fas fa-igloo fs-30 text-yellow-400" />
            </div>
            <div className="media-body">
              <h5 className="fs-18 fw-semibold mb-0 work-title">
                Get your dream house
              </h5>
              {/* <div class="work-sub_title text-muted">There are many variations</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FSection