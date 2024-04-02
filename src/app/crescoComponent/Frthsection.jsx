import React from 'react'
import Regions from "@/components/Regions";
import SectionHeader from "@/components/section-header";

const Frthsection = () => {
  return (
    <div className="bg-white py-5 border-bottom">
      <div className="container py-4">
        <SectionHeader />
        <Regions />

        <div className="text-center mt-5" data-aos="fade-up">
          {/* Start Button */}
          {/* <button className="btn bg-gray-900 text-white hover:bg-gray-700 btn-lg d-inline-flex hstack gap-2">
            <span>Brows More Projects</span>
            <span className="vr" />
            <i className="fa-arrow-right fa-solid fs-14" />
          </button> */}
          {/* /.End Button */}
        </div>
      </div>
    </div>
  );
}

export default Frthsection