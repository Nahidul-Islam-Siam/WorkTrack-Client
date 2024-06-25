import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';




const usePayment = () => {
    const axiosPublic = useAxiosPublic()
  
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email, page],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payment/${user?.email}`, {
                params: { page, pageSize }
            });
            return res.data;
        }
    });

  return [payments, loading, refetch]

};


export default usePayment;