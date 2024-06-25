import { createBrowserRouter } from "react-router-dom";

import Main from "../Main/Main";
import DashBoard from "../Layout/DashBoard";
import Login from "../Component/LoginRegistration/Login";
import SignUp from "../Component/LoginRegistration/SignUp";
import Home from "../Pages/Home/Home";
import Statistics from "../DashBoard/Statistics/Statistics";
import AllEmployeeList from "../DashBoard/AllEmployeeList/AllEmployeeList";
import ContactUs from "../DashBoard/ContactUs/ContactUs";
import Progress from "../DashBoard/Progress/Progress";

import WorkSheet from "../DashBoard/WorkSheet/WorkSheet";
import PaymentHistory from "../DashBoard/PaymentHistory/PaymentHistory";
import EmployeeList from "../DashBoard/AllEmployeeList/EmployeeList";
import PrivateRoute from "./PrivateRoute";
import Profile from "../DashBoard/Profile/Profile";
import AdminRoute from "./AdminRoute";
import HRroute from "./HRroute";
import EmployeeDetails from "../DashBoard/AllEmployeeList/EmployeeDetails";
import ContactFeedbackPage from "../DashBoard/Statistics/ContactFeedbackPage";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
        ,
        {
          path: '/contact-us',
          element: <ContactUs></ContactUs>,
        },
      ]
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:"/dashboard",
      element:<PrivateRoute><DashBoard/></PrivateRoute>,
      children:[
        {
          index: true,
          element: <PrivateRoute><Statistics></Statistics></PrivateRoute>,
        },
        {
          path: 'all-employee-list',
          element: <PrivateRoute><AdminRoute><AllEmployeeList></AllEmployeeList></AdminRoute></PrivateRoute>,
        },
        {
          path: 'feedback',
          element: <PrivateRoute><AdminRoute><ContactFeedbackPage/></AdminRoute></PrivateRoute>,
        },
        
        {
          path: 'progress',
          element: <PrivateRoute><HRroute><Progress></Progress></HRroute></PrivateRoute>,
        },
        {
          path: 'profile',
          element: <PrivateRoute><Profile/></PrivateRoute>,
        },
        {
          path: 'work-sheet',
          element: <PrivateRoute><WorkSheet/></PrivateRoute>,
        },
        {
          path: 'payment-history',
          element: <PrivateRoute><PaymentHistory/></PrivateRoute>,
        },
        {
path:'employee-details/:id',
element:<EmployeeDetails></EmployeeDetails>,
        },
        {
          path: 'employee-list',
          element:<PrivateRoute> <HRroute><EmployeeList/></HRroute></PrivateRoute>,
        }
      ]
    }
  ]);


  export default router