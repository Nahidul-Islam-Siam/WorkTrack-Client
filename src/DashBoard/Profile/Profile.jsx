import { Helmet } from 'react-helmet-async';
import useAuth from '../../Component/Hook/UseAuth';
import LoadingSpinner from '../Menu/LoadingSpinner';
import useRole from '../../Component/Hook/useRole';

const Profile = () => {
  const { user, loading } = useAuth() || {};
  const [role, isLoading] = useRole();

  if (loading) return <LoadingSpinner />;

  const dataItems = [
    { label: 'Name', value: user?.displayName, colorClass: 'bg-blue-200', btnText: 'Edit Name' },
    { label: 'Email', value: user?.email, colorClass: 'bg-green-200', btnText: 'Edit Email' },
    { label: 'Bank Account', value: user?.bank_account_no || 'No account number found', colorClass: 'bg-yellow-200', btnText: 'Edit Account' },
    { label: 'Salary', value: user?.salary || 'No salary found', colorClass: 'bg-pink-200', btnText: 'Edit Salary' },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl w-11/12 md:w-3/5">
        <img
          alt="profile background"
          src="https://i.ibb.co/CQBsRS8/pexels-stywo-1261728.jpg"
          className="w-full mb-4 rounded-t-lg h-36 object-cover"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL || 'https://via.placeholder.com/150'}
              className="mx-auto object-cover rounded-full h-24 w-24 border-2 border-white"
            />
          </a>

          <p className="uppercase p-2 px-4 text-xs text-white bg-pink-500 rounded-full mt-2">
            {isLoading ? 'Loading...' : role}
          </p>
          <p className="mt-2 text-xl font-medium text-gray-800">User Id: {user?.uid}</p>
          <div className="w-full mt-4">
            {dataItems.map((item, index) => (
              <div key={index} className={`flex flex-wrap items-center justify-between text-sm text-gray-600 p-3 rounded-md mb-2 ${item.colorClass}`}>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-700">{item.label}</span>
                  <span className="text-black">{item.value}</span>
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">{item.btnText}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
