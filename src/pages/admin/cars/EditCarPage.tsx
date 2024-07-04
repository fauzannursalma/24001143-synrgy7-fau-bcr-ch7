import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../../../components/layouts/AdminLayout";
import Aside1 from "../../../components/admin/Aside1";
import Aside2 from "../../../components/admin/Aside2";
import axios from "axios";

type CarData = {
  id: string;
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

function EditCarPage() {
  const { id } = useParams<{ id: string }>();
  const { reset, register, handleSubmit, setValue } = useForm<CarData>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        // Fetch car data from the API
        const response = await axios.get(
          `http://localhost:8000/api/cars/${id}`
        );
        const carData: CarData = response.data;

        console.log("Fetched Car Data:", carData); // Debugging line

        // Use reset to populate the form fields with the fetched data
        reset(carData);

        // Or you can use setValue, ensure field names match exactly with carData keys
        Object.keys(carData).forEach((key) => {
          setValue(key as keyof CarData, carData[key as keyof CarData]);
        });

        setLoading(false);
      } catch (error) {
        console.error("Error fetching car details:", error);
        setLoading(false);
      }
    };

    fetchCar();
  }, [id, reset, setValue]);

  // Handler for form submission
  const onSubmit: SubmitHandler<CarData> = async (data) => {
    try {
      // Send updated data to the API
      const response = await axios.put(
        `http://localhost:8000/api/cars/${id}`,
        data
      );
      console.log("Car update response:", response.data);

      // Reset the form and navigate back to the cars list
      reset();
      navigate("/admin/cars");
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  // Render a loading indicator while the data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render the form with the populated data
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
          <span className="text-gray-500">Edit Car</span>
        </nav>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Edit Cars</h1>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-xl font-bold mb-4">Edit Car</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full"
          >
            {/* Form Fields */}
            <div className="mb-4">
              <label htmlFor="model" className="block mb-2 text-sm font-medium">
                Model
              </label>
              <input
                type="text"
                id="model"
                {...register("model", { required: true })}
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
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
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="year" className="block mb-2 text-sm font-medium">
                Year
              </label>
              <input
                type="number"
                id="year"
                {...register("year", { required: true, valueAsNumber: true })}
                className="shadow-sm focus:ring-darkblue focus:border-darkblue block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-darkblue text-white font-bold rounded-md shadow-sm hover:bg-darkblue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkblue mt-4"
            >
              Update Car
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default EditCarPage;
