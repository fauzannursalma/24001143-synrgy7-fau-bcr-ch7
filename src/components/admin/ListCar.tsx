import React from "react";
import { Settings, Users, Edit2, Calendar } from "react-feather";
import { useNavigate } from "react-router-dom";
import { Car } from "../../interfaces/Car";
// import { useCarContext } from "../../contexts/CarContext";
import DeleteCar from "./DeleteCar";

interface ListCarProps {
  cars: Car[];
  fetchCars: () => void;
}

const ListCar: React.FC<ListCarProps> = ({ cars, fetchCars }) => {
  const navigate = useNavigate();

  if (!cars) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {!cars || cars.length === 0 ? (
        <p className="text-gray-600">No cars available</p>
      ) : (
        cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              alt="preview"
              src={car.image}
              className="h-56 w-full object-cover"
            />
            <div className="p-4 flex-grow">
              <h2 className="text-sm font-semibold">{`${car.manufacture} / ${car.model}`}</h2>
              <p className="text-gray-600 font-bold">{`Rp. ${car.rent_per_day} / hari`}</p>
              <p className="text-neutral-04 mt-2 text-sm">{car.description}</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-neutral-04">
                  <Users className="mr-2" />
                  {`${car.capacity} orang`}
                </div>
                <div className="flex items-center text-sm text-neutral-04">
                  <Settings className="mr-2" />
                  {car.transmission}
                </div>
                <div className="flex items-center text-sm text-neutral-04">
                  <Calendar className="mr-2" />
                  {`Tahun ${car.year}`}
                </div>
              </div>
            </div>
            <div className="p-4  flex gap-4">
              <div className="flex gap-2 w-full">
                {/* <button
                  className="flex items-center justify-center w-1/2 text-alert-danger border border-alert-danger rounded-md py-2 hover:bg-red-50"
                  onClick={() => handleDeleteCar(car.id)}
                >
                  <Trash className="mr-2" />
                  <span className="text-sm">Delete</span>
                </button> */}

                <DeleteCar carId={car.id} onDelete={fetchCars} />
                <button
                  className="flex items-center justify-center w-1/2 bg-limegreen text-white rounded-md py-2 hover:bg-green-700"
                  onClick={() => navigate(`/admin/edit-car/${car.id}`)}
                >
                  <Edit2 className="mr-2" />

                  <span className="text-sm">Edit</span>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListCar;
