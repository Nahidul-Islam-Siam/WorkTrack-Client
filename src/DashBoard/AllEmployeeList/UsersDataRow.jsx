import PropTypes from "prop-types";
import { useState } from "react";
import UpdateUserModal from "../Modal/UpdateUserModal";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Component/Hook/useAxiosPublic";
import useAuth from "../../Component/Hook/UseAuth";
import ConfirmationModal from "./ConfirmModal";

const UserDataRow = ({ user, refetch }) => {
  const { user: loggedInUser } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isActive, setIsActive] = useState(user?.isActive); // Local state for isActive

  const axiosPublic = useAxiosPublic();

  const { mutateAsync: updateRole } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosPublic.patch(`/users/update/${user?.email}`, role);
      return data;
    },
    onSuccess: data => {
      refetch();
      setIsOpen(false);
      toast.success("User role updated successfully");
    }
  });

  const { mutateAsync: fireUser } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosPublic.delete(`/users/fire/${user?.email}`);
      return data.user; // Return the updated user data
    },
    onSuccess: (updatedUser) => {
      refetch();
      setIsConfirmOpen(false);
      toast.success("User has been fired");
      setIsActive(updatedUser.isActive); // Update the local state
    }
  });

  const modalHandler = async (selected) => {
    if (loggedInUser?.email === user?.email) {
      toast.error("Action not allowed");
      return setIsOpen(false);
    }
    const userRole = { role: selected };
    try {
      await updateRole(userRole);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFire = async () => {
    try {
      await fireUser();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.role}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.designation ? (
          <p className={`${user.designation === "Verified" ? "text-green-500" : "text-yellow-500"} whitespace-no-wrap`}>
            {user.designation}
          </p>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Unavailable</p>
        )}
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {user?.role !== "HR" && (
          <button
            onClick={() => setIsOpen(true)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
          >
            <span aria-hidden="true" className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
            <span className="relative">Make HR</span>
          </button>
        )}
        <UpdateUserModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} user={user} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        {!isActive ? (
          <button
            onClick={() => setIsConfirmOpen(true)}
            className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
          >
            <span aria-hidden="true" className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
            <span className="relative">Fire</span>
          </button>
        ) : (
          <p className="text-red-500 whitespace-no-wrap">Fired</p>
        )}
        <ConfirmationModal isOpen={isConfirmOpen} setIsOpen={setIsConfirmOpen} onConfirm={handleFire} />
      </td>
    </tr>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default UserDataRow;
