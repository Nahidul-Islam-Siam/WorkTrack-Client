import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Component/Hook/UseAuth";
import useAxiosPublic from "../../Component/Hook/useAxiosPublic";
import { useState } from "react";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const [page, setPage] = useState(0);
    const [pageSize] = useState(5);

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email, page],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment/${user?.email}`, {
                params: { page, pageSize }
            });
            return res.data;
        }
    });

    const handleNextPage = () => setPage(prev => prev + 1);
    const handlePreviousPage = () => setPage(prev => Math.max(prev - 1, 0));

    return (
        <div className="max-w-4xl mx-auto p-4 bg-red-50 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">Payment History</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white divide-y divide-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-red-100">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {payments
                            .sort((a, b) => new Date(a.month) - new Date(b.month))
                            .map((payment, index) => (
                                <tr key={payment._id} className={`transition-colors ${index % 2 === 0 ? 'hover:bg-gray-100' : 'hover:bg-gray-200'}`}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.month}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${payment.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{payment.transactionId}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={handlePreviousPage}
                    disabled={page === 0}
                    className={`px-4 py-2 rounded-md text-white ${page === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    Previous
                </button>
                <button
                    onClick={handleNextPage}
                    disabled={payments.length < pageSize}
                    className={`px-4 py-2 rounded-md text-white ${payments.length < pageSize ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaymentHistory;
