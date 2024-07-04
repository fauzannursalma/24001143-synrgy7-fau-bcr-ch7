import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="flex h-full w-full items-center justify-center"
    >
      <div className="container w-11/12 md:w-3/4 space-y-10 mt-[60px] md:mt-[100px]">
        <div className="space-y-4 text-center md:text-left">
          <h1 className="font-bold text-2xl text-black">Why Us?</h1>
          <p className="text-sm font-light text-black">
            Mengapa harus pilih Binar Car Rental?
          </p>
        </div>
        <div className="md:flex block justify-between gap-8 md:space-y-0 space-y-4">
          <div className="why-card flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="./img/assets/icon_complete.png"
              alt="icon_complete"
              className="mb-4"
            />
            <h2 className="text-base font-bold text-black">Mobil Lengkap</h2>
            <p className="text-sm font-light text-black">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
          <div className="why-card flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="./img/assets/icon_price.png"
              alt="icon_price"
              className="mb-4"
            />
            <h2 className="text-base text-black font-bold">Harga Murah</h2>
            <p className="text-sm text-black font-light">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
          <div className="why-card flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="./img/assets/icon_24hrs.png"
              alt="icon_24hrs"
              className="mb-4"
            />
            <h2 className="text-base text-black font-bold">Layanan 24 Jam</h2>
            <p className="text-sm text-black font-light">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
          <div className="why-card flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="./img/assets/icon_professional.png"
              alt="icon_professional"
              className="mb-4"
            />
            <h2 className="text-base text-black font-bold">
              Sopir Profesional
            </h2>
            <p className="text-sm text-black font-light">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
