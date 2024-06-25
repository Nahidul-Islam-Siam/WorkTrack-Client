import { Link, useNavigate } from "react-router-dom";

import Lottie from 'react-lottie';
import animationData from '../../assets/login.json';

import { GiSpinningBlades } from "react-icons/gi";
import { useState } from "react";
import useAuth from "../Hook/UseAuth";
import toast from "react-hot-toast";
import SocialLink from "./SocialLink";


const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { loading, signIn, resetPassword, setLoading } =
    useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const htmlForm = e.target;

    const email = htmlForm.email.value;
    const password = htmlForm.password.value;

    console.log(email, password);
    try {
      await signIn(email, password);

      setLoading(true);
      navigate("/");
      toast.success("Signup Successful");
    } catch (err) {
      console.log(err);
      toast.error(err);
      setLoading(false);
    
    }
  };

  // reset password

  const handleResetPassword = async () => {


    if (!email) return toast.error("Please write your email!");
    try {
      await resetPassword(email)

      setLoading(false);
      toast.success(
        "Request Success!! Check your email htmlFor further process...."
      );
    } catch (err) {
      console.log(err);
      toast.error(err.message);
      setLoading(false);
    }
    console.log(email);
  };
  // handle google signin

// TODO

  return (
   <div>
     <div className="font-[sans-serif] text-[#333]">
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-7xl w-full">
        <div className="border-2 border-blue-700 hover:border-rose-800  rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
              <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Log In</h1>
          <p className="text-sm text-gray-400">
       Please Sign in to see the activity 
          </p>
       </div>
        <form
     onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                onBlur={(e) => setEmail(e.target.value)}
                name="email"
                id="email"
                required
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border-2 hover:border-rose-700 rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
             </div>
             <div>
               <div className="flex justify-between">
                 <label htmlFor="password" className="text-sm mb-2">
                   Password
                 </label>
               </div>
               <input
                 type="password"
                 name="password"
                 autoComplete="current-password"
                id="password"
                 required
                 placeholder="*******"
                 className="w-full px-3 py-2 border rounded-md hover:border-rose-700 border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
              />
             </div>
           </div>

           <button
             disabled={loading}
             type="submit"
             className="bg-cyan-600 w-full rounded-md py-3 text-white"
         >
             {loading ? (
              <GiSpinningBlades className="animate-spin m-auto" />
           ) : (
               "continue"
             )}
         </button>
        </form>
              <div className="space-y-1">
          <button
             onClick={handleResetPassword}
             className="text-xs hover:underline hover:text-rose-500 text-gray-400"
          >
           Forgot password?
         </button>
       </div>
       <div className="flex items-center pt-4 space-x-1">
           <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
           <p className="px-3 text-sm dark:text-gray-400">
             Login with social accounts
         </p>
           <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
     </div>
     
        {/* social */}
         <SocialLink/>
         <p className="px-6 text-sm text-center text-gray-400">
           Don&apos;t have an account yet?{" "}
           <Link
            to="/signup"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Sign up
          </Link>
          .
        </p>
        </div>
        <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
         
          <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />
        </div>
      </div>
    </div>
  </div>
   </div>
  );
};

export default Login;
