"use client"
import Link from 'next/link';
import React from 'react'

const FfthSection = () => {
   const handleClickCeo = () => {
     window.open(`https://wa.me/${+971585145243}`, "_blank");
   };
  return (
    <div className="py-5 bg-gradient-primary">
      <div className="container pt-5 pb-4">
        <div className="row">
          <div className="col-md-10 offset-md-1" data-aos="fade-down">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-5">
              {/* Start Subtitle */}
              <div className="bg-yellow-500 d-inline-block fw-medium mb-3 rounded-pill section-header__subtitle text-capitalize text-gray-900">
                Featured Properties
              </div>
              {/* /. End Subtitle */}
              {/* Start Section Header title */}

              <h2 className="h1 fw-semibold mb-3 section-header__title text-capitalize">
                Browse our inventory
              </h2>

              {/* /.End Section Header Title */}
              {/* Start Section Header Sub Title */}
              <div className="sub-title fs-16">
                Explore our extensive inventory of properties, from cozy starter{" "}
                <br />
                homes to luxurious estates.Begin your journey today and discover
                <br />
                the perfect place to call home.
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div
            className="col-sm-6 col-lg-4 col-xl-3 d-flex"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              {/* <Link href="property-details" className="card-link" /> */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/01.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="bg-yellow-500 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Rent
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-yellow-500">140,000 AED</h3>
                  <div> /year</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  JVC
                </h4>
                <div className="card-property-description mb-3">
                  Dubai, UAE
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>1 Bed</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>1 Bath</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>1300 Sqft</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
            </div>
            {/* /. End Card Property */}
          </div>
          <div
            className="col-sm-6 col-lg-4 col-xl-3 d-flex"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/02.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="bg-yellow-500 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Rent
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-yellow-500">95,000 AED</h3>
                  <div> /year</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">Creek Harbour</h4>
                <div className="card-property-description mb-3">
                  Dubai, UAE
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>1 Bed</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>1 Bath</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>675 Sqft</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
            </div>
            {/* /. End Card Property */}
          </div>
          <div
            className="col-sm-6 col-lg-4 col-xl-3 d-flex"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/03.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="bg-yellow-500 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Rent
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-yellow-500">130,000 AED</h3>
                  <div> /year</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Dubai Science Park
                </h4>
                <div className="card-property-description mb-3">
                  Dubai, UAE
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>2 Beds</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>3 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>1457 Sqft</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
            </div>
            {/* /. End Card Property */}
          </div>
          <div
            className="col-sm-6 col-lg-4 col-xl-3 d-flex"
            data-aos="fade-up"
            data-aos-delay={600}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/sportscity.jpeg"
                  alt=""
                  className="img-fluid"
                />
                <div className="bg-gray-900 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Sale
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-gray-900">850,000 AED</h3>
                  <div> / full-payment</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Dubai Sports City
                </h4>
                <div className="card-property-description mb-3">
                  Dubai, UAE
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>1 Beds</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>2 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>704 Sqft</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
            </div>
            {/* /. End Card Property */}
          </div>
          <div
            className="col-sm-6 col-lg-4 col-xl-3 d-flex"
            data-aos="fade-up"
            data-aos-delay={700}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/05.jpg"
                  alt=""
                  className="img-fluid"
                />
                <div className="bg-yellow-500 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Rent
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-yellow-500">50,000 AED</h3>
                  <div> /month</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Arjan
                </h4>
                <div className="card-property-description mb-3">
                  Dubai, UAE
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>1 Bed</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>1 Bath</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>422.59 Sqft</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
            </div>
            {/* /. End Card Property */}
          </div>
        
          <div
            className="col-sm-6 col-lg-4 col-xl-3 d-flex"
            data-aos="fade-up"
            data-aos-delay={1000}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow-sm w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/marina.jpeg"
                  alt=""
                  className="img-fluid"
                />
                <div className="bg-gray-900 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Sale
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-gray-900">14,50,000 AED</h3>
                  <div> / full-payment</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Marina
                </h4>
                <div className="card-property-description mb-3">
                  Dubai, UAE
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>2 Beds</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>2 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>1200 Sqft</span>
                  </div>
                </div>
                {/* /. End Card Property Facilities */}
              </div>
            </div>
            {/* /. End Card Property */}
          </div>
        </div>
        <div className="text-center mt-5" data-aos="fade-up">
          {/* Start Button */}
          <button onClick={handleClickCeo}
            // href="properties-list"
            href="/"
            className="btn bg-gray-900 text-white hover:bg-gray-700 btn-lg d-inline-flex hstack gap-2"
          >
            <span>Book Now</span>
            <span className="vr" />
            <i className="fa-arrow-right fa-solid fs-14" />
          </button>
          {/* /.End Button */}
        </div>
      </div>
    </div>
  );
}

export default FfthSection