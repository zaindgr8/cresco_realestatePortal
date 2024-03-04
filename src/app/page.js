
import Header from "@/components/Header";
import Carousel from "@/components/corousel";
import FeaturesProperties from "@/components/feature-properties";
import FooterWhite from "@/components/footer-white";
import Dropdown from "@/components/form-control-two";
import Link from "next/link";
import Layout from "@/components/Layout";
import FSection from "@/crescoComponent/FSection";
import Ssection from "@/crescoComponent/Ssection";
import TSection from "@/crescoComponent/TSection";
import Frthsection from "@/crescoComponent/Frthsection";
import FfthSection from "@/crescoComponent/FfthSection";

export default function HomeTwo() {
  return (
    <>
      <Layout>
        <FSection/>
        <Ssection/>
        <TSection/>
        <Frthsection/>
        <FfthSection/>
      </Layout>
    </>
  );
}


