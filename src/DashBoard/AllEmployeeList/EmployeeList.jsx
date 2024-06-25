import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useUsers from '../../Component/Hook/useUsers';
import axios from 'axios';
import PayModal from '../Modal/PayModal';

const EmployeeList = () => {
  const [users, loading, refetch] = useUsers();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookingInfo, setSelectedBookingInfo] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(10); // Number of items per page

  useEffect(() => {
    console.log('Users:', users);
  }, [users]);

  const toggleVerifiedStatus = async (user) => {
    try {
      console.log('Toggling verified status for user:', user._id);
      const response = await axios.patch(`https://work-track-server.vercel.app/users-update/${user._id}`);
      console.log('Response from server:', response.data);
      if (response.data.updatedStatus && response.data.updatedStatus['$set'] && response.data.updatedStatus['$set'].isVerified !== undefined) {
        console.log('Refetching users...');
        await refetch();
        console.log('Refetch completed.');
      } else {
        console.warn('No modification detected.');
      }
    } catch (error) {
      console.error('Error updating verification status:', error);
    }
  };

  const handlePayButtonClick = (user) => {
    if (!user.isVerified) return;

    const bookingInfo = {
      _id: user._id,
      email: user.email,
      title: user.name,
      price: user.salary,
    };
    setSelectedBookingInfo(bookingInfo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBookingInfo(null);
  };

  const totalPages = Math.ceil(users.length / perPage);

  // Function to slice users array based on current page and perPage
  const getUsersForCurrentPage = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    return users.slice(startIndex, endIndex);
  };

  const navigateToPage = (page) => {
    setCurrentPage(page);
  };

  if (loading && !users.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <title>Employee List</title>
      </Helmet>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Verified</th>
              <th className="border border-gray-300 px-4 py-2">Bank Account</th>
              <th className="border border-gray-300 px-4 py-2">Salary</th>
              <th className="border border-gray-300 px-4 py-2">Pay</th>
              <th className="border border-gray-300 px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {getUsersForCurrentPage().map((user, index) => (
              <tr key={user._id} className="transition-all duration-200 hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{user?.name}</td>
                <td className="border border-gray-300 px-4 py-2">{user?.email}</td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    onClick={() => toggleVerifiedStatus(user)}
                    className={`rounded-full px-2 py-1 ${
                      user.isVerified ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                    }`}
                  >
                    {user.isVerified ? 'Verified' : 'Not Verified'}
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">{user?.bank_account_no}</td>
                <td className="border border-gray-300 px-4 py-2">{user?.salary}</td>
                <td className="border border-gray-300 px-4 py-2">
                  <button
                    onClick={() => handlePayButtonClick(user)}
                    disabled={!user.isVerified}
                    className={`${
                      user.isVerified
                        ? 'bg-blue-500 hover:bg-blue-600'
                        : 'bg-gray-500 cursor-not-allowed'
                    } text-white font-bold py-1 px-3 rounded`}
                  >
                    Pay
                  </button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link
                    to={`/dashboard/employee-details/${user._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Employee Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <nav className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => navigateToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-bold py-2 px-4 rounded-l-md`}
          >
            Previous
          </button>
          <button
            onClick={() => navigateToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
            } text-white font-bold py-2 px-4 rounded-r-md`}
          >
            Next
          </button>
        </nav>
      </div>
      {selectedBookingInfo && (
        <PayModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          bookingInfo={selectedBookingInfo}
          refetch={refetch}
        />
      )}
    </div>
  );
};

export default EmployeeList;
