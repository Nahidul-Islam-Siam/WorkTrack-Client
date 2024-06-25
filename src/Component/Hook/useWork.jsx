import {useQuery} from '@tanstack/react-query'
import useAxiosPublic from './useAxiosPublic';



const useWork = () => {
    const axiosPublic = useAxiosPublic()
    // const [menu, setMenu] = useState([])
    // const [loading, setLoading] = useState(true)
    // useEffect(()=>{
    //     fetch('https://bistro-boss-server-phi-flame.vercel.app/menu')
    //     .then(res=>res.json())
    //     .then(data=>{
           
    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])

const {data:works = [],isPending:loading,refetch} =useQuery({
    queryKey: ['works'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/work')
        return res.data
    }
})

  return [works, loading, refetch]

};


export default useWork;