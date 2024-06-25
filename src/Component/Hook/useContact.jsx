import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';




const useContact = () => {
    const axiosPublic = useAxiosPublic()


const {data:contact = [],isPending:loading,refetch} =useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/contact')
        return res.data
    }
})

  return [contact, loading, refetch]

};


export default useContact;