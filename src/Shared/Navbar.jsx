import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import { useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import avatarImg from '../assets/images/placeholder.jpg';
import useAuth from "../Component/Hook/UseAuth";
import { IoIosHome } from "react-icons/io";
import { FaPersonWalkingDashedLineArrowRight } from "react-icons/fa6";
import { MdOutlineContactPhone, MdOutlineFollowTheSigns } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { FaSignInAlt } from "react-icons/fa";
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logOut } = useAuth();

    return (
        <div className="fixed w-full z-10 shadow-sm bg-opacity-50">
            <div className="py-4 border-b-[1px] border-indigo-500">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        {/* Logo */}
                        <div>
                            <Link to="/">
                                <img
                                    className="hidden md:block w-21 h-10"
                                    src="https://i.ibb.co/Y7wBDqY/Work-Track-2-removebg-preview.png"
                                    alt="logo"
                                   
                                />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex gap-3">
                            <NavLink to="/" className="btn btn-outline btn-success"><IoIosHome size={24}/> Home</NavLink>
                            <NavLink to="/dashboard" className="btn btn-outline success"><FaPersonWalkingDashedLineArrowRight size={24}/> Dashboard</NavLink>
                            <NavLink to="/contact-us" className="btn btn-outline btn-primary"><MdOutlineContactPhone size={24}/> Contact Us</NavLink>
                        </div>

                        {/* Dropdown Menu */}
                        <div className="relative">
                            <div className="flex items-center gap-3">
                                <div
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
                                >
                                    <AiOutlineMenuUnfold />
                                    <div className="hidden md:block">
                                        {/* Avatar */}
                                        <img
                                            className="rounded-full"
                                            src={user?.photoURL || avatarImg}
                                            alt="profile"
                                            height="30"
                                            width="30"
                                        />
                                    </div>
                                </div>
                            </div>

                            {isOpen && (
                                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-cyan-600  bg-opacity-25 overflow-hidden right-0 top-12 text-sm border border-purple-900">
                                    <div className="flex flex-col cursor-pointer">
                                        <NavLink to="/" className="flex items-center gap-2 text-2xl md:hidden px-4 py-3 hover:bg-blue-100 transition font-semibold border-red-500 border-2"><IoIosHome />Home</NavLink>
                                       
                                        <NavLink to="/contact" className="flex items-center gap-2 text-2xl md:hidden px-4 py-3 hover:bg-blue-100 transition font-semibold "><MdOutlineContactPhone size={24}/>Contact Us</NavLink>
                                        {user ? (
                                            <>
                                                <NavLink to="/dashboard" className=" flex items-center gap-2 px-4 py-3 hover:bg-purple-100 transition font-semibold"><FaPersonWalkingDashedLineArrowRight /> Dashboard</NavLink>
                                                <div onClick={logOut} className="px-4 py-3 flex items-center gap-2  hover:bg-red-100 transition font-semibold cursor-pointer"><IoIosLogOut />Logout</div>
                                            </>
                                        ) : (
                                            <>
                                                <NavLink to="/login" className="px-4 py-3 hover:bg-blue-100 transition font-semibold flex items-center"> <FaSignInAlt/>Login</NavLink>
                                                <NavLink to="/signup" className="px-4 py-3 hover:bg-green-100 transition font-semibold flex items-center gap-2"><MdOutlineFollowTheSigns />Sign Up</NavLink>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;
