
import Header from "@/components/Header";
import Carousel from "@/components/corousel";
import FeaturesProperties from "@/components/feature-properties";
import FooterWhite from "@/components/footer-white";
import Dropdown from "@/components/form-control-two";
import Link from "next/link";
import Layout from "@/components/Layout";
import FSection from "@/app/crescoComponent/FSection";
import Ssection from "@/app/crescoComponent/Ssection";
import TSection from "@/app/crescoComponent/TSection";
import Frthsection from "@/app/crescoComponent/Frthsection";
import FfthSection from "@/app/crescoComponent/FfthSection";
import Testimonial from "@/app/crescoComponent/Testimonial";

export default function HomeTwo() {
  return (
    <>
      <Layout>
        <FSection/>
        <Ssection/>
        <TSection/>
        <Frthsection/>
        <FfthSection/>
        <Testimonial/>
      </Layout>
    </>
  );
}


