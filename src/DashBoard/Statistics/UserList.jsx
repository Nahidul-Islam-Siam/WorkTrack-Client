import React from 'react';
import useUsers from "../../Component/Hook/useUsers";

const UserList = () => {
    const [users] = useUsers();

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {users.map((user, index) => (
                <div 
                    key={user._id} 
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg"
                >
                    <div className="flex flex-col items-center p-6">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={user?.image_url} alt={user?.name} />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user?.name}</h5>
                        <span className="btn-sm btn-outline btn-primary text-sm text-gray-500 dark:text-gray-400"> {user?.designation}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 uppercase ">{user?.role}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</span>
                       
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
