import Layout from "../../components/layouts/AdminLayout";
import React, { useEffect, useState } from "react";
import CarsTable from "../../components/admin/TabelCar";
import { useCarContext } from "../../contexts/CarContext";
import { useAuth } from "../../contexts/AuthContext";
import Aside1 from "../../components/admin/Aside1";
import Aside2 from "../../components/admin/Aside2";
// import TransactionTable from "../../components/admin/Tables";

const DashboardPage: React.FC = () => {
  const { carsTable, fetchCarsTable } = useCarContext();
  const [loaded, setLoaded] = useState(false);
  const { me } = useAuth();

  useEffect(() => {
    if (!loaded) {
      fetchCarsTable();

      setLoaded(true);
      me();
    }
  }, [fetchCarsTable, loaded, me]);

  return (
    <Layout
      aside1Content={<Aside1 activePage="Dashboard" />}
      aside2Content={<Aside2 visible={true} activePage="Dashboard" />}
    >
      <div className="p-6">
        <h1>
          <b className="text-[20px] font-bold">Dashboard</b>
        </h1>
        {/* <div className="py-6 flex gap-2 items-center">
          <div className="w-1 h-4 bg-darkblue"></div>
          <h2>List Order</h2>
        </div>
        <div className="pb-12">
          <TransactionTable />
        </div> */}
        <div className="mt-8 pb-6">
          <CarsTable cars={carsTable} />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
