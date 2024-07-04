import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import axios from "axios";
import { Car } from "../interfaces/Car";
import { CarTable } from "../components/admin/TabelCar";
import { BASE_URL } from "../env";
import { addCarFormData, updateCarFormData } from "../utils/FormCars";

interface CarContextType {
  cars: Car[];
  loading: boolean;
  error: string;
  searchCars: (
    capacity?: string,
    availableAt?: string,
    pickupTime?: string
  ) => void;
  fetchCars: () => void;
  fetchCarsTable: () => void;
  fetchCarsById: (id: string) => Promise<updateCarFormData | undefined>;
  addCar: (data: addCarFormData) => Promise<void>;
  editCar: (data: updateCarFormData, id: string) => Promise<void>;
  deleteCar: (id: string) => Promise<void>;
  carsTable: CarTable[];
}

const CarContext = createContext<CarContextType | undefined>(undefined);

export const CarProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [carsTable, setCarsTable] = useState<CarTable[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    searchCars();
  }, []);

  const searchCars = async (
    capacity?: string,
    availableAt?: string,
    pickupTime?: string
  ) => {
    setLoading(true);
    try {
      const url = new URL(`${BASE_URL}/cars`);

      if (capacity) url.searchParams.append("capacityFilter", capacity);
      if (availableAt && pickupTime) {
        const dateFilter = `${availableAt}T${pickupTime}`;
        url.searchParams.append("dateFilter", dateFilter);
      }
      const decoded = decodeURIComponent(url.href);

      const response = await axios.get(decoded);

      if (response.status !== 200) {
        setCars([]);
        setError("Failed to fetch cars.");
        throw new Error("Failed to fetch cars.");
      }

      setCars(response.data.data);
      setError("");
    } catch (error) {
      setCars([]);
      setError("Failed to fetch cars. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCars = async () => {
    try {
      const userJSON = localStorage.getItem("user");
      const user = userJSON ? JSON.parse(userJSON) : null;

      if (!user || !user.token) {
        throw new Error("User token not found");
      }

      const response = await axios.get(`${BASE_URL}/cars`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setCars(response.data.data);
      setError("");
      return response.data.data;
    } catch (error) {
      setError("Failed to fetch admin cars. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCarsTable = async () => {
    try {
      const userJSON = localStorage.getItem("user");
      const user = userJSON ? JSON.parse(userJSON) : null;

      if (!user || !user.token) {
        throw new Error("User token not found");
      }

      const response = await axios.get(`${BASE_URL}/cars`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setCarsTable(response.data.data);
      setError("");
      return response.data.data;
    } catch (error) {
      setError("Failed to fetch admin cars. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fetchCarsById = async (
    id: string
  ): Promise<updateCarFormData | undefined> => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${BASE_URL}/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.data;
    } catch (error) {
      console.error("Failed to fetch cars by id", error);
    }
  };

  const addCar = async (data: addCarFormData): Promise<void> => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("plate", data.plate);
      formData.append("manufacture", data.manufacture);
      formData.append("model", data.model);
      formData.append("rent_per_day", String(data.rent_per_day)); // Convert to string
      formData.append("capacity", String(data.capacity));
      formData.append("description", data.description);
      formData.append("available_at", data.available_at.toISOString()); // Convert Date to string
      formData.append("transmission", data.transmission);
      formData.append("available", String(data.available)); // Convert to string
      formData.append("type", data.type);
      formData.append("year", String(data.year)); // Convert to string
      data.options.forEach((option, index) =>
        formData.append(`options[${index}]`, option)
      );
      data.specs.forEach((spec, index) =>
        formData.append(`specs[${index}]`, spec)
      );

      const imageFile = document.getElementById("image") as HTMLInputElement;
      formData.append("image", imageFile?.files?.item(0) as File);

      const response = await axios.post(`${BASE_URL}/cars`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Car added successfully!", response.data.data);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  const editCar = async (
    data: updateCarFormData,
    id: string
  ): Promise<void> => {
    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("plate", data.plate);
      formData.append("manufacture", data.manufacture);
      formData.append("model", data.model);
      formData.append("rent_per_day", String(data.rent_per_day));
      formData.append("capacity", String(data.capacity));
      formData.append("description", data.description);
      formData.append("available_at", data.available_at.toISOString());
      formData.append("transmission", data.transmission);
      formData.append("available", String(data.available));
      formData.append("type", data.type);
      formData.append("year", String(data.year));

      // Append options and specs directly from data
      data.options.forEach((option, index) =>
        formData.append(`options[${index}]`, option)
      );
      data.specs.forEach((spec, index) =>
        formData.append(`specs[${index}]`, spec)
      );

      if (data.image && data.image.length > 0) {
        const imageFile = document.getElementById(
          "imageInput"
        ) as HTMLInputElement;
        if (imageFile?.files?.length) {
          formData.append("image", imageFile.files[0]);
        }
      }

      const response = await axios.put(`${BASE_URL}/cars/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Car updated successfully!", response.data.data);
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  const deleteCar = async (id: string): Promise<void> => {
    try {
      const response = await axios.delete(`${BASE_URL}/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      console.log("Car deleted successfully!", response.data);

      window.location.reload();
      return response.data;
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <CarContext.Provider
      value={{
        cars,
        loading,
        error,
        searchCars,
        fetchCars,
        fetchCarsTable,
        carsTable,
        fetchCarsById,
        addCar,
        editCar,
        deleteCar,
      }}
    >
      {children}
    </CarContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCarContext = () => {
  const context = useContext(CarContext);
  if (!context) {
    throw new Error("useCarContext must be used within a CarProvider");
  }
  return context;
};
