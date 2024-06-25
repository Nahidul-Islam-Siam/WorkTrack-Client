
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Main = () => {
    return (
        <div className="overflow-hidden">
        <Navbar />
        <div className='pt-24 min-h-[calc(100vh-68px)]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    );
};

export default Main;