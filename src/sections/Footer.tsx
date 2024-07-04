import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-[60px] mb-[100px] md:mt-[150px]">
      <div className="flex h-full w-full items-center justify-center">
        <div className="container md:w-3/4 w-11/12 md:flex block justify-between md:space-y-0 space-y-4">
          <div className="w-full md:w-1/4 ">
            <div className="space-y-4">
              <p className="text-sm font-light text-black w-[80%] md:w-full">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p className="text-sm font-light text-black">
                binarcarrental@gmail.com
              </p>
              <p className="text-sm font-light text-black">081-233-334-808</p>
            </div>
          </div>
          <div className="min-w-fit">
            <div className="space-y-4 flex flex-col">
              <a
                href="#our-services"
                className="text-sm font-medium text-black"
              >
                Our Services
              </a>
              <a href="#why-us" className="text-sm font-medium text-black">
                Why Us
              </a>
              <a href="#testimonial" className="text-sm font-medium text-black">
                Testimonial
              </a>
              <a href="#faq" className="text-sm font-medium text-black">
                FAQ
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="space-y-4">
              <p className="text-sm font-light text-black">Connect with us</p>
              <div className="flex justify-start gap-4">
                <a href="https://www.facebook.com" target="_blank">
                  <i
                    data-feather="facebook"
                    className="w-[32px] h-[32px] bg-darkblue rounded-full  text-white p-[5px] stroke-1"
                  ></i>
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <i
                    data-feather="instagram"
                    className="w-[32px] h-[32px] bg-darkblue rounded-full  text-white p-[5px] stroke-1"
                  ></i>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <i
                    data-feather="twitter"
                    className="w-[32px] h-[32px] bg-darkblue rounded-full  text-white p-[5px] stroke-1"
                  ></i>
                </a>
                <a href="mailto:example@example.com" target="_blank">
                  <i
                    data-feather="mail"
                    className="w-[32px] h-[32px] bg-darkblue rounded-full  text-white p-[5px] stroke-1"
                  ></i>
                </a>
                <a href="https://www.twitch.tv" target="_blank">
                  <i
                    data-feather="twitch"
                    className="w-[32px] h-[32px] bg-darkblue rounded-full text-white p-[5px] stroke-1"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <div className="space-y-4">
              <p className="text-sm text-black font-light">
                Copyright Binar 2022
              </p>
              <div className=" w-[100px] h-9 bg-darkblue"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
