import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Users from "./pages/Users";
import Help from "./pages/Help";

import Order from "./pages/Order";
import Schedules from "./pages/Schedules";
import Profile from "./components/profile/Profile";
function App() {
  return (
    <Router>
      <SideBar>
     <Profile/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Help" element={<Help />} />
          <Route path="/Schedules" element={<Schedules />} />
          <Route path="/order" element={<Order />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
