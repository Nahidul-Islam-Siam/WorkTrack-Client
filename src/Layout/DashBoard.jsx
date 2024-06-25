import { Outlet } from "react-router-dom";
import Sidebar from "../DashBoard/Sidebar";
// import Sidebar from "../DashBoard/Sidebar";


const DashBoard = () => {
    return (
        <div className="relative min-h-screen md:flex">

        {/* sidebar */}
<Sidebar></Sidebar>

        {/* Outlet ---> dynamic content */}
       <div className="flex-1 md:ml-64">
      <div className="p-5">
      <Outlet></Outlet>
      </div>
       </div>
    </div>
    );
};

export default DashBoard;