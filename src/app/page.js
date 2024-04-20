import Layout from "@/components/Layout";
import FSection from "@/app/crescoComponent/FSection";
import Ssection from "@/app/crescoComponent/Ssection";
import TSection from "@/app/crescoComponent/TSection";
import Frthsection from "@/app/crescoComponent/Frthsection";
import FfthSection from "@/app/crescoComponent/FfthSection";
import Testimonial from "@/app/crescoComponent/Testimonial";
import CeoMessage from "./crescoComponent/CeoMessage";


export default function HomeTwo() {
  return (
    <>
      <Layout>
        {/* //Hero Section */}
        <FSection />
        {/* //Team Section */}
        <TSection />
        {/* //About Section */}
        <Ssection /> 
        {/* //Projects */}
        <Frthsection />
        {/* //Properties */}
        <FfthSection />
         <Testimonial />
        <CeoMessage /> 
      </Layout>
    </>
  );
}
