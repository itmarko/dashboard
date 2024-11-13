import { Outlet } from "react-router-dom";
import { Navbar, Breadcrumbs, SideNav } from "../import/PublicImport";

const PrivateLayout = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1">
        <Navbar />
        <Breadcrumbs />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default PrivateLayout;
