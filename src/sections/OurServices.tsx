import React, { useEffect } from "react";
import feather from "feather-icons";

const OurServices: React.FC = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <section
      id="our-services"
      className="flex h-full w-full items-center justify-center"
    >
      <div className="container md:flex md:w-3/4 justify-evenly items-center block w-11/12 mt-[60px] md:mt-[100px]">
        <div className="flex justify-center items-center w-full md:w-3/4">
          <img
            src="./img/assets/img_service.png"
            className="w-3/4 md:w-[459px]"
            alt="services"
          />
        </div>
        <div className="mt-6 w-full md:w-1/2">
          <h2 className="font-bold text-2xl leading-9">
            Best Car Rental for any kind of trip in Bandung!
          </h2>
          <p className="font-light text-sm leading-5 my-4">
            Sewa mobil di Bandung bersama Binar Car Rental jaminan harga lebih
            murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
            pelayanan terbaik untuk perjalanan wisata bisnis, wedding, meeting,
            dll.
          </p>
          <ul className="font-light text-sm leading-5 flex flex-wrap gap-4">
            <li className="flex w-full items-center">
              <i
                data-feather="check"
                className="bg-lavender text-darkblue rounded-full p-1 stroke-[3px] mr-4"
              ></i>
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </li>
            <li className="flex w-full items-center">
              <i
                data-feather="check"
                className="bg-lavender text-darkblue rounded-full p-1 stroke-[3px] mr-4"
              ></i>
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </li>
            <li className="flex w-full items-center">
              <i
                data-feather="check"
                className="bg-lavender text-darkblue rounded-full p-1 stroke-[3px] mr-4"
              ></i>
              Sewa Mobil Jangka Panjang Bulanan
            </li>
            <li className="flex w-full items-center">
              <i
                data-feather="check"
                className="bg-lavender text-darkblue rounded-full p-1 stroke-[3px] mr-4"
              ></i>
              Gratis Antar - Jemput Mobil di Bandara
            </li>
            <li className="flex w-full items-center">
              <i
                data-feather="check"
                className="bg-lavender text-darkblue rounded-full p-1 stroke-[3px] mr-4"
              ></i>
              Layanan Airport Transfer / Drop In Out
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
