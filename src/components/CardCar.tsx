import { Car } from "../interfaces/Car";

const CardCars = ({ cars }: { cars: Car[] }) => {
  return (
    <section className="container mx-auto rounded-md  mt-[400px] md:-mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {!cars || cars?.length === 0 ? (
          <div className="flex items-center justify-center h-[200px]">
            <p className="text-lg font-bold">Mobil tidak ditemukan</p>
          </div>
        ) : (
          cars?.map((car) => (
            <div key={car.id} className="p-4 rounded-xl shadow-xl space-y-2">
              <img
                src={car.image}
                alt={`${car.manufacture} ${car.model}`}
                className="w-full h-[200px] object-cover"
              />
              <p className="text-sm font-normal">
                {car.manufacture}/{car.model}
              </p>
              <p className="text-base font-bold">
                Rp. {car.rent_per_day.toLocaleString("id-ID")} / Hari
              </p>
              <p className="font-light text-sm text-slate-700 w-full car-description">
                {car.description}
              </p>
              <p className="font-light flex items-center gap-3">
                <i className="fa fa-solid fa-user-group"></i>
                <span>{car.capacity} orang</span>
              </p>
              <p className="font-light flex items-center gap-3">
                <i className="fa fa-solid fa-gear"></i>
                <span>{car.transmission}</span>
              </p>
              <p className="font-light flex items-center gap-3">
                <i className="fa fa-solid fa-calendar"></i>
                <span>tahun {car.year}</span>
              </p>
              <button className="bg-[#5cb85f] text-white py-2 px-4 rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-full">
                Pilih Mobil
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default CardCars;
