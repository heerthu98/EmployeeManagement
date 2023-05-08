import "./App.css";
import DashboardLayout from "./layouts/DashboardLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Orders from "./views/Orders";
import Dashboard from "./views/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
