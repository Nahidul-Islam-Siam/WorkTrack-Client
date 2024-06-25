import { Helmet } from "react-helmet-async";
import { useState } from "react";
import useWork from "../../Component/Hook/useWork";
import useUsers from "../../Component/Hook/useUsers";
import LoadingSpinner from "../Menu/LoadingSpinner";

const Progress = () => {
    const [works, refetch, loading] = useWork();
    const [users] = useUsers();

    const [selectedEmployee, setSelectedEmployee] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");

    // Function to generate a color based on the index
    const getColor = (index) => {
        const colors = ["bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-pink-200", "bg-purple-200", "bg-indigo-200", "bg-red-200", "bg-gray-200"];
        return colors[index % colors.length];
    };

    // Filter works based on selected employee and month
    const filteredWorks = works.filter(work => {
        const workDate = new Date(work.date);
        const matchesEmployee = selectedEmployee ? work?.email === selectedEmployee : true;
        const matchesMonth = selectedMonth ? workDate.getMonth() + 1 === parseInt(selectedMonth) : true;
        return matchesEmployee && matchesMonth;
    });

    // Calculate total work hours
    const totalWorkHours = filteredWorks.reduce((sum, work) => sum + parseFloat(work.hoursWorked), 0);

    return (
        <div className="container mx-auto px-4 py-8">
            <Helmet>
                <title>Progress</title>
            </Helmet>
            <div className="text-center mb-6">
                <h2 className="text-3xl font-bold">Progress Page</h2>
            </div>
            
            <div className="filters mb-4 flex justify-center gap-4">
                <select 
                    value={selectedEmployee} 
                    onChange={(e) => setSelectedEmployee(e.target.value)} 
                    className="select select-bordered w-full max-w-xs bg-gray-100"
                >
                    <option value="">All Employees</option>
                    {users.map(user => (
                        <option key={user._id} value={user?.email}>{user.name}</option>
                    ))}
                </select>

                <select 
                    value={selectedMonth} 
                    onChange={(e) => setSelectedMonth(e.target.value)} 
                    className="select select-bordered w-full max-w-xs bg-gray-100"
                >
                    <option value="">All Months</option>
                    {[...Array(12).keys()].map(month => (
                        <option key={month + 1} value={month + 1}>{new Date(0, month).toLocaleString('default', { month: 'long' })}</option>
                    ))}
                </select>
            </div>

            <div className="summary mb-6 text-center">
                <h3 className="text-xl font-semibold">Total Work Hours: {totalWorkHours}</h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Employee</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Hours Worked</th>
                            <th className="px-4 py-2">Task</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredWorks.map((work, index) => (
                            <tr key={work._id} className={`border-t ${getColor(index)} hover:bg-gray-100 hover:border-gray-300 transition-colors`}>
                                <td className="px-4 py-2">{work.name}</td>
                                <td className="px-4 py-2">{new Date(work.date).toLocaleDateString()}</td>
                                <td className="px-4 py-2">{work.hoursWorked}</td>
                                <td className="px-4 py-2">{work.task}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* {loading && <LoadingSpinner />} */}
                {!loading && filteredWorks.length === 0 && (
                    <div className="text-center mt-4 text-gray-600">
                        No data available for the selected filters.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Progress;
