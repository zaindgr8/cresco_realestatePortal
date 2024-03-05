import Link from 'next/link';
import React from 'react'

const FfthSection = () => {
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
                  <h3 className="m-0 fw-semibold text-yellow-500">800 AED</h3>
                  <div> /month</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Business Bay, Dubai
                </h4>
                <div className="card-property-description mb-3">
                  Floor 4th, Room 400
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
                    <span>1 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>5x7 m²</span>
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
                <div className="bg-gray-900 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Sale
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-gray-900">1.5M AED</h3>
                  <div> /full-payment</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">International City</h4>
                <div className="card-property-description mb-3">
                  France Cluster, Q4, Floor 4th
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>1 Bed1</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>1 Bath1</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>5x7 m²</span>
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
                <div className="bg-gray-900 card-property-badge d-inline-block end-1 fs-13 fw-semibold position-absolute property-tags px-2 py-1 rounded-3 text-white top-1">
                  For Sale
                </div>
              </div>
              {/* /. End Property Image */}
              <div className="card-property-content-wrap d-flex flex-column h-100 position-relative p-4">
                {/* Start Card Property Price */}
                <div className="align-items-end card-property-price d-flex flex-row mb-1 gap-1">
                  <h3 className="m-0 fw-semibold text-gray-900">7M AED</h3>
                  <div> /mortgage</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Al Quoz, Dubai
                </h4>
                <div className="card-property-description mb-3">
                  Villa 30, St 56
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>3 Beds</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>3 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>5x7 m²</span>
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
                  src="assets/img/properties/04.jpg"
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
                  <h3 className="m-0 fw-semibold text-yellow-500">2600 AED</h3>
                  <div> / month</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Marina JBR, Dubai
                </h4>
                <div className="card-property-description mb-3">
                  Near Beach, Commercial Block
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
                    <span>1 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>5x7 m²</span>
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
                  <h3 className="m-0 fw-semibold text-yellow-500">4000 AED</h3>
                  <div> /month</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Silicon Oasis, Dubai
                </h4>
                <div className="card-property-description mb-3">
                  Building 205, Apt 500
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>3 Beds</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>3 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>5x7 m²</span>
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
            data-aos-delay={800}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/06.jpg"
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
                  <h3 className="m-0 fw-semibold text-gray-900">5M AED</h3>
                  <div> /Emaar</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Creek Harbour, Dubai
                </h4>
                <div className="card-property-description mb-3">
                  Villa 300, Near Creek
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
                    <span>5x7 m²</span>
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
            data-aos-delay={900}
          >
            {/* Start Card Property */}
            <div className="border-0 card card-property rounded-3 shadow w-100 flex-fill overflow-hidden">
              {/* Start Card Link */}
              <Link href="/" className="card-link" />
              {/* /. End Card Link */}
              {/* Start Property Image */}
              <div className="property-img card-image-hover overflow-hidden">
                <img
                  src="assets/img/properties/07.jpg"
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
                  <h3 className="m-0 fw-semibold text-gray-900">7M AED</h3>
                  <div> /Ellington</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  Palm Jumerah, Dubau
                </h4>
                <div className="card-property-description mb-3">
                  Street 7
                </div>
                {/* Start Card Property Facilities */}
                <div className="border card-property-facilities gap-2 hstack mt-auto p-3 pt-3 rounded-3 text-center">
                  <div className="">
                    <i className="fa-solid fa-bed text-dark me-1" />
                    <span>3 Beds</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-bath text-dark me-1" />
                    <span>3 Baths</span>
                  </div>
                  <span className="vr" />
                  <div className="">
                    <i className="fa-solid fa-vector-square text-dark me-1" />
                    <span>5x7 m²</span>
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
                  src="assets/img/properties/08.jpg"
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
                  <h3 className="m-0 fw-semibold text-yellow-500">6000 AED</h3>
                  <div> / month</div>
                </div>
                {/* /. End Card Property Price */}
                <h4 className="property-card-title mb-3">
                  DIFC, Dubai
                </h4>
                <div className="card-property-description mb-3">
                  Street 6
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
                    <span>5x7 m²</span>
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
          <Link
            // href="properties-list"
            href="/"
            className="btn bg-gray-900 text-white hover:bg-gray-700 btn-lg d-inline-flex hstack gap-2"
          >
            <span>Browse All Properties</span>
            <span className="vr" />
            <i className="fa-arrow-right fa-solid fs-14" />
          </Link>
          {/* /.End Button */}
        </div>
      </div>
    </div>
  );
}

export default FfthSection