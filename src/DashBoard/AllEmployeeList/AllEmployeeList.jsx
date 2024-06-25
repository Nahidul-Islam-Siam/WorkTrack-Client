import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../Component/Hook/useAxiosPublic";
import useAuth from "../../Component/Hook/UseAuth";
import useUsers from "../../Component/Hook/useUsers";
import LoadingSpinner from "../Menu/LoadingSpinner";
import UserDataRow from "./UsersDataRow";

const AllEmployeeList = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const [users, loading, refetch] = useUsers();
  const verified = users.filter(user => user.isVerified);
  
  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <Helmet>
          <title>All Employee List</title>
        </Helmet>
        <div className="py-8">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr className="bg-gray-800 text-white">
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal"
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal"
                    >
                      Make HR
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 border-b border-gray-200 text-left text-sm uppercase font-normal"
                    >
                      Fire
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {verified.map(user => (
                    <UserDataRow key={user?._id} user={user} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEmployeeList;
