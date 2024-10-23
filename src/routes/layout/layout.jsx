import "./layout.scss";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        {/* Outlet component is used to render the child routes specified in the App.jsx file, acts like a placeholder */}
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
