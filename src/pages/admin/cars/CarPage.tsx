import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ListCar from "../../../components/admin/ListCar";
import { useCarContext } from "../../../contexts/CarContext";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../../../components/layouts/AdminLayout";
import Aside1 from "../../../components/admin/Aside1";
import Aside2 from "../../../components/admin/Aside2";

const Cars: React.FC = () => {
  const navigate = useNavigate();
  const { cars, fetchCars } = useCarContext();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded) {
      fetchCars();
      setLoaded(true);
    }
  }, [fetchCars, loaded]);

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
          <span className="text-gray-500">List Cars</span>
        </nav>

        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">List Cars</h1>
          <button
            className="flex items-center bg-darkblue text-white px-4 py-2 rounded-md hover:bg-[#232f6e] "
            onClick={() => navigate("/admin/add-car")}
          >
            <AddIcon className="mr-2" />
            Add New Car
          </button>
        </div>

        <ListCar cars={cars} fetchCars={fetchCars} />
      </div>
    </Layout>
  );
};

export default Cars;
