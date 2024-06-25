import { TbFidgetSpinner } from "react-icons/tb";
import useAuth from "../../Component/Hook/UseAuth";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { axiosPublic } from "../../Component/Hook/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";

const WorkSheet = () => {
  const { user, loading } = useAuth();
  const [startDate, setStartDate] = useState(new Date());

  const { data: works = [], refetch } = useQuery({
    queryKey: ['works', user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/works/${user?.email}`);
      return res.data;
    }
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (workData) => {
      const { data } = await axiosPublic.post("/work-post", workData);
      console.log(data);
    },
    onSuccess: () => {
      refetch();
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const hoursWorked = form.hour.value;
    const task = form.task.value;
    const date = startDate.toLocaleDateString();

    try {
      const workData = {
        task,
        hoursWorked,
        date,
        email: user?.email,
        name: user?.displayName,
      };

      await mutateAsync(workData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl p-6 rounded-md bg-white shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Input your task</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-1">
              <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-700">Task Done</label>
              <select
                id="task"
                name="task"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-gray-200 text-gray-900
                           hover:border-rose-500"
              >
                <option disabled selected>Choose Completed Task</option>
                <option value="Sales" className="border-blue-500 hover:bg-blue-50">Sales</option>
                <option value="Support" className="border-green-500 hover:bg-green-50">Support</option>
                <option value="Content" className="border-purple-500 hover:bg-purple-50">Content</option>
                <option value="Paper-work" className="border-yellow-500 hover:bg-yellow-50">Paper-work</option>
              </select>
            </div>

            <div className="col-span-1">
              <label htmlFor="hour" className="block mb-2 text-sm font-medium text-gray-700">Worked Hour</label>
              <input
                type="number"
                name="hour"
                id="hour"
                placeholder="Worked time (hour)"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-gray-200 text-gray-900"
              />
            </div>

            <div className="col-span-1">
              <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-700">Set Date</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent bg-gray-200 text-gray-900"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-rose-500 text-white font-medium hover:bg-rose-600"
            >
              {loading ? (
                <TbFidgetSpinner className="animate-spin m-auto" />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Task</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Worked Time</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {works.slice().reverse().map((work, index) => (
                <tr key={work._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{work.task}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{work.hoursWorked} hour</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{work.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WorkSheet;
