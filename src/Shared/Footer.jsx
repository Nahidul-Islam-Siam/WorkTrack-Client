
import { FaFacebookMessenger ,FaLinkedin} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-red-300 text-blue-800">
      <div className="container px-6 py-12 mx-auto">
        <div className="flex flex-col items-center justify-center mb-8">
          <a href="#">
            <img className="md:block w-21 h-10" src="https://i.ibb.co/Y7wBDqY/Work-Track-2-removebg-preview.png" alt="MerakiUI Logo" />
          </a>

          <div className="flex flex-wrap justify-center mt-4 -mx-2">
            <Link to='/' className="mx-2 my-1 text-sm hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
            <Link to='/dashboard' className="mx-2 my-1 text-sm hover:text-blue-500 dark:hover:text-blue-400">Dashboard</Link>
            <Link to='/login' className="mx-2 my-1 text-sm hover:text-blue-500 dark:hover:text-blue-400">Login</Link>
            <Link to='/signup' className="mx-2 my-1 text-sm hover:text-blue-500 dark:hover:text-blue-400">Sign Up</Link>
            <Link to='/contact-us' className="mx-2 my-1 text-sm hover:text-blue-500 dark:hover:text-blue-400">Contact Us</Link>
          </div>
        </div>

        <hr className="border-gray-700 my-6" />

        <div className="flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Design and Developed by Siam IT. All rights reserved.</p>

          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-blue-500 dark:hover:text-blue-400">
             <FaGithub size={30}/>
            </a>
            <a href="#" className="text-black hover:text-blue-500 dark:hover:text-blue-400">
            <FaLinkedin size={30}/>
            </a>
            <a href="#" className="text-black hover:text-blue-500 dark:hover:text-blue-400">
            <FaFacebookMessenger size={30}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
