import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./protected";
import LandingPage from "../pages/home/LandingPage";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import SearchCarsPage from "../pages/home/SearchCarPage";
import DashboardPage from "../pages/admin/DashboardPage";
import CarPage from "../pages/admin/cars/CarPage";
import AddCarPage from "../pages/admin/cars/AddCar";
import EditCarPage from "../pages/admin/cars/EditCar";
import NotFound from "../sections/NotFound";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cars" element={<SearchCarsPage />} />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/admin/cars" element={<CarPage />} />
        <Route path="/admin/edit-car/:id" element={<EditCarPage />} />
        <Route path="/admin/add-car" element={<AddCarPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
