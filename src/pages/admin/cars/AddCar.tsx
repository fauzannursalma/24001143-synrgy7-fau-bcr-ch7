import Layout from "../../../components/layouts/AdminLayout";
import Aside1 from "../../../components/admin/Aside1";
import Aside2 from "../../../components/admin/Aside2";
import AddCar from "../../../components/admin/AddCar";

const AddCarPage: React.FC = () => {
  return (
    <Layout
      aside1Content={<Aside1 activePage="Cars" />}
      aside2Content={<Aside2 visible={true} activePage="Cars" />}
    >
      <AddCar />
    </Layout>
  );
};

export default AddCarPage;
