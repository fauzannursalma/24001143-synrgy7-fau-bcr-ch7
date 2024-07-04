import { useNavigate } from "react-router-dom";

interface HeroProps {
  showButton?: boolean;
}

const Hero: React.FC<HeroProps> = ({ showButton = false }) => {
  const navigate = useNavigate();

  return (
    <section id="hero" className="pt-10 md:pt-0">
      <div className="relative pt-20 md:h-[500px]">
        <div className="w-full h-full flex items-center justify-center">
          <div className="container w-11/12 md:w-3/4">
            <div className="space-y-4 pr-4 md:w-1/2">
              <h1 className="text-4xl font-bold md:w-full w-[90%] leading-relaxed">
                Sewa & Rental Mobil Terbaik di kawasan Bandung
              </h1>
              <p className="md:w-[90%]">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </div>

            {showButton && (
              <button
                onClick={() => navigate("/cars")}
                className="bg-limegreen text-white font-bold rounded-md px-5 py-2 mt-5 cursor-pointer"
              >
                Mulai Sewa Mobil
              </button>
            )}
          </div>
        </div>
        <div className="md:absolute md:flex bottom-0 right-0">
          <div className="ml-[16px] md:ml-0 pt-[48px] md:pt-0">
            <img src="./img/assets/img_car.png" alt="Car" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
