import React from "react";
import "../../index.css";
import Navbar from "../../sections/Navbar";
import Hero from "../../sections/Hero";
import OurServices from "../../sections/OurServices";
import WhyUs from "../../sections/WhyUs";
import Testimonial from "../../sections/Testi";
import CTABanner from "../../sections/CTABanner";
import { FAQ } from "../../sections/FAQ";
import { Footer } from "../../sections/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-full mx-auto">
      <div className="bg-lavender">
        <Navbar />
        <Hero showButton={true} />
      </div>
      <OurServices />
      <WhyUs />
      <Testimonial />
      <CTABanner />
      <FAQ />
      <Footer />
    </div>
  );
};

export default LandingPage;
