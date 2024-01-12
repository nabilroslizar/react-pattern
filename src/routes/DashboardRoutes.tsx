import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../modules/Dashboard";
import Settings from "../modules/Dashboard/Settings";
import Member from "../modules/Dashboard/Member";

const DashboardRoutes = () => {
  //do logics here

  //earlyreturn  pattern
  const isAuth = false;
  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route index element={<Navigate to="dashboard" />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="settings" element={<Settings />} />
      <Route path="members" element={<Member />} />
    </Routes>
  );
};

export default DashboardRoutes;
