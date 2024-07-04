import React, { useState } from "react";
import CardCars from "../components/CardCar";
import { useCarContext } from "../contexts/CarContext";

const SearchCars: React.FC = () => {
  const { cars, searchCars } = useCarContext();
  const [typeDrive, setTypeDrive] = useState("");
  const [passenger, setPassenger] = useState(0);
  const [capacity, setCapacity] = useState("");
  const [avaliableAt, setAvaliableAt] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const handleTypeDriver = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTypeDrive = event.target.value;
    setTypeDrive(selectedTypeDrive);
    if (selectedTypeDrive === "true") {
      setPassenger(1);
    } else {
      setPassenger(0);
    }
  };

  const handleAvaliableAt = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAvaliableAt(event.target.value);
  };

  const handlePickupTime = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    setPickupTime(event.target.value);
  };

  const handleCapacity = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCapacity(event.target.value);
  };

  const handleSubmit = async () => {
    const totalCapacity = (passenger + (parseInt(capacity) || 0)).toString();
    searchCars(totalCapacity, avaliableAt, pickupTime);
  };

  return (
    <>
      <section className="container mx-auto relative">
        <div className="w-full bg-lavender absolute top-0   md:relative md:top-0 lg:top-[-80px] rounded-md shadow-xl py-4">
          <div className="flex flex-col md:flex-row p-4 gap-4 items-center">
            <div className="w-full md:w-3/12">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="tipeDriver"
              >
                Tipe Drive
              </label>
              <div className="mt-1.5">
                <select
                  id="typeDrive"
                  name="typeDrive"
                  value={typeDrive}
                  onChange={handleTypeDriver}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled value="" className="text-gray-400">
                    Pilih Tipe Drive
                  </option>
                  <option value="true">Dengan supir</option>
                  <option value="false">Tanpa supir (Lepas kunci)</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-3/12">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="tanggal"
              >
                Tanggal
              </label>
              <div className="mt-1.5">
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={avaliableAt}
                  onChange={handleAvaliableAt}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full md:w-3/12">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="waktuJemput"
              >
                Pilih Waktu
              </label>
              <div className="mt-1.5">
                <select
                  id="waktuJemput"
                  name="waktuJemput"
                  value={pickupTime}
                  onChange={handlePickupTime}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option disabled value="" className="text-gray-400">
                    Pilih Waktu
                  </option>
                  <option value="08:00:00">08:00 WIB</option>
                  <option value="09:00:00">09:00 WIB</option>
                  <option value="10:00:00">10:00 WIB</option>
                  <option value="11:00:00">11:00 WIB</option>
                  <option value="12:00:00">12:00 WIB</option>
                </select>
              </div>
            </div>
            <div className="w-full md:w-3/12">
              <label
                className="block text-sm font-medium leading-6 text-gray-900"
                htmlFor="jumlahPenumpang"
              >
                Jumlah Penumpang (Optional)
              </label>
              <div className="mt-1.5">
                <input
                  type="number"
                  id="jumlahPenumpang"
                  name="jumlahPenumpang"
                  value={capacity}
                  onChange={handleCapacity}
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Jumlah Penumpang"
                />
              </div>
            </div>
            <div className="w-full md:w-2/12 flex justify-center md:justify-end px-10">
              <button
                id="load-btn"
                onClick={handleSubmit}
                className="bg-limegreen text-white py-1.5 px-4  rounded-sm hover:bg-[#0a800e] transition duration-300 ease-in-out w-full md:w-auto"
              >
                Cari Mobil
              </button>
            </div>
          </div>
        </div>
      </section>

      <CardCars cars={cars} />
    </>
  );
};

export default SearchCars;
