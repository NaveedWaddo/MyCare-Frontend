import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "../Layout/AdminDashboard";
import Random from "../components/Random";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <div>
              <AdminDashboard />
            </div>
          }
        />
        <Route
          path="/pharmacy"
          element={
            <div>
              <AdminDashboard />
            </div>
          }
        />
        <Route
          path="/patients"
          element={
            <div>
              <AdminDashboard />
            </div>
          }
        />
        <Route
          path="/doctor"
          element={
            <div>
              <AdminDashboard />
            </div>
          }
        />
        <Route
          path="/appointment"
          element={
            <div>
              <AdminDashboard />
            </div>
          }
        />
        <Route
          path="**"
          element={
            <div>
              <Random />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
