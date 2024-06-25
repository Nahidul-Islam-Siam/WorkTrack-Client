import toast from "react-hot-toast";
import useAuth from "../Hook/UseAuth";
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SocialLink = () => {
    const {loading, setLoading,signInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const handleGoogleSignIn=async()=>{
        try{
          
          setLoading(true)
        const result=  await signInWithGoogle()
        const user = result.user;
        const userData = {
            name: user.displayName,
            role: "employee",
            email: user.email,
            image_url: user.photoURL,
            designation: "Employee", // You can set a default designation if needed
            salary: 0, // Default salary, can be updated later
            bank_account_no: "" ,
            isVerified: false
            // De
          };
          axios.post('https://work-track-server.vercel.app/users',userData)
          .then(res=>{
            console.log(res.data);
          })
        navigate('/')
        toast.success('Signup Successful')

        
        }catch(err){
        console.log(err);
        toast.error(err.message)
        }
    
    
        // post userData to DB
    
      }
    return (
        <div className="text-center justify-center items-center">
     <button 
        disabled={loading}
        onClick={handleGoogleSignIn} 
         className='disabled:cursor-not-allowed cursor-pointer w-full flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded '>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
    </div>
    );
};

export default SocialLink;