import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../components/layouts/AdminLayout";
import Aside1 from "../../../components/admin/Aside1";
import Aside2 from "../../../components/admin/Aside2";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type CarData = {
  model: string;
  manufacture: string;
  plate: string;
  rent_per_day: number;
  capacity: number;
  description: string;
  transmission: string;
  type: string;
  year: string;
};

const AddCarPage: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<CarData>();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const onSubmit: SubmitHandler<CarData> = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/cars",
        data,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      const responseData = response.data;
      console.log("Car creation response:", responseData);
      <Link to="/admin/cars" />;
      reset();
    } catch (error) {
      console.error("Error creating car:", error);
    }
  };

  return (
    <Layout
      aside1Content={<Aside1 activePage="Cars" />}
      aside2Content={<Aside2 visible={true} activePage="Cars" />}
    >
      <div className="p-6">
        <nav className="text-sm mb-4">
          <Link to="/admin/cars" className="text-blue-600 font-bold">
            Cars
          </Link>
          <span className="text-gray-500 mx-2">/</span>
          <span className="text-gray-500">Add Car</span>
        </nav>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Add Cars</h1>
        </div>

        <div className="container mx-auto px-4 py-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            <div className="mb-4">
              <label htmlFor="model" className="block mb-2 text-sm font-medium">
                Model
              </label>
              <input
                type="text"
                id="model"
                {...register("model", { required: true })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="manufacture"
                className="block mb-2 text-sm font-medium"
              >
                Brand
              </label>
              <input
                type="text"
                id="manufacture"
                {...register("manufacture", { required: true })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="plate" className="block mb-2 text-sm font-medium">
                Plate
              </label>
              <input
                type="text"
                id="plate"
                {...register("plate", { required: true })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="rent_per_day"
                className="block mb-2 text-sm font-medium"
              >
                Rent Per Day
              </label>
              <input
                type="number"
                id="rent_per_day"
                {...register("rent_per_day", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="capacity"
                className="block mb-2 text-sm font-medium"
              >
                Capacity
              </label>
              <input
                type="number"
                id="capacity"
                {...register("capacity", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium"
              >
                Description
              </label>
              <input
                type="text"
                id="description"
                {...register("description", { required: true })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="transmission"
                className="block mb-2 text-sm font-medium"
              >
                Transmission
              </label>
              <input
                type="text"
                id="transmission"
                {...register("transmission", { required: true })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="type" className="block mb-2 text-sm font-medium">
                Type
              </label>
              <input
                type="text"
                id="type"
                {...register("type", { required: true })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="year" className="block mb-2 text-sm font-medium">
                Year
              </label>
              <input
                type="number"
                id="year"
                {...register("year", {
                  required: true,
                  valueAsNumber: true,
                })}
                className="shadow-md focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-neutral-03 rounded-md py-2 px-3"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center px-4 py-2 bg-limegreen text-white font-bold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-limegreen mt-4"
            >
              Add Car
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddCarPage;
