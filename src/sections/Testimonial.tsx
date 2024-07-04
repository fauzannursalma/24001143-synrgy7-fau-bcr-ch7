import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { ChevronLeft, ChevronRight, Star } from "react-feather";

import feather from "feather-icons";

const Testimonial: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  const settings = {
    infinite: true,
    centerMode: true,
    dots: false,
    arrows: false,
    draggable: true,
    slidesToScroll: 1,
    centerPadding: "400px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "100px",
          draggable: true,
          centerMode: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
          draggable: false,
          centerMode: false,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  let slider: Slider | null = null;

  const handlePrevious = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const handleNext = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  return (
    <section id="testimonial">
      <div className="flex h-full w-full items-center justify-center md:w-full mt-10">
        <div className="flex w-full justify-center">
          <div className="max-w-full space-y-4 text-center">
            <h1 className="text-2xl font-bold text-black">Testimonial</h1>
            <p className="text-sm font-light text-black">
              Berbagai review positif dari para pelanggan kami
            </p>

            <div className="relative">
              <Slider
                ref={(c) => (slider = c)}
                {...settings}
                className="slick-carousel"
              >
                <div className="bg-lavender rounded-md px-2 py-10 md:px-10 md:py-20">
                  <div className="block items-center justify-center gap-10 space-y-6 px-4 md:flex md:justify-start md:space-y-0 md:px-0">
                    <div className="mx-auto w-[80px] md:w-1/6">
                      <img src="./img/assets/pp_1.png" alt="Testimonial" />
                    </div>
                    <div className="w-full space-y-6 text-left md:w-4/6 md:space-y-2">
                      <div className="flex justify-center md:justify-start">
                        <div className="pt-5 w-[80px] h-auto md:w-1/5 md:pt-0">
                          <img src="./img/assets/icon_rate.png" alt="" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-light text-black md:w-full">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="text-sm font-normal text-black">
                          John Dee 32, Bromo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lavender mx-4 rounded-md px-2 py-10 md:px-10 md:py-20">
                  <div className="block items-center justify-center gap-10 space-y-6 px-4 md:flex md:justify-start md:space-y-0 md:px-0">
                    <div className="mx-auto w-[80px] md:w-1/6">
                      <img src="./img/assets/pp_2.png" alt="Testimonial" />
                    </div>
                    <div className="w-full space-y-6 text-left md:w-4/6 md:space-y-2">
                      <div className="flex justify-center md:justify-start">
                        <div className="pt-5 w-[80px] h-auto md:w-1/5 md:pt-0">
                          <img src="./img/assets/icon_rate.png" alt="" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-light text-black md:w-full">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="text-sm font-normal text-black">
                          John Dee 32, Bromo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-lavender mx-4 rounded-md px-2 py-10 md:px-10 md:py-20">
                  <div className="block items-center justify-center gap-10 space-y-6 px-4 md:flex md:justify-start md:space-y-0 md:px-0">
                    <div className="mx-auto w-[80px] md:w-1/6">
                      <img src="./img/assets/pp_2.png" alt="Testimonial" />
                    </div>
                    <div className="w-full space-y-6 text-left md:w-4/6 md:space-y-2">
                      <div className="flex justify-center md:justify-start">
                        <div className="pt-5 w-[80px] h-auto md:w-1/5 md:pt-0">
                          <img src="./img/assets/icon_rate.png" alt="" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-light text-black md:w-full">
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <p className="text-sm font-normal text-black">
                          John Dee 32, Bromo
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>

              <div className="relative mt-4 flex transform items-center justify-center px-4">
                <button
                  className="border-btn mx-4 rounded-full border hover:bg-green-600"
                  onClick={handlePrevious}
                >
                  <i
                    data-feather="chevron-left"
                    className="text-black hover:text-neutral-02 p-1"
                  ></i>
                </button>
                <button
                  className="border-btn mx-4 rounded-full border hover:bg-green-600"
                  onClick={handleNext}
                >
                  <i
                    data-feather="chevron-right"
                    className="text-black hover:text-neutral-02 p-1"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
