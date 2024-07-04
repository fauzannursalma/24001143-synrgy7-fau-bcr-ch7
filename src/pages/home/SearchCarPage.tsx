import React from "react";
import "../../index.css";
import Navbar from "../../sections/Navbar";
import Hero from "../../sections/Hero";
import SearchCars from "../../sections/SearchCar";
import { Footer } from "../../sections/Footer";

const SearchCarPage: React.FC = () => {
  return (
    <div className="min-h-full mx-auto">
      <div className="bg-lavender">
        <Navbar />
        <Hero showButton={false} />
      </div>
      <SearchCars />
      <Footer />
    </div>
  );
};

export default SearchCarPage;
