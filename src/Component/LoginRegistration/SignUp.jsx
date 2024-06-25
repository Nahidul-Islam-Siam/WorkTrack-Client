import { Link, useNavigate} from 'react-router-dom'
import { TbFidgetSpinner } from "react-icons/tb";

import useAuth from '../Hook/UseAuth';
import toast from 'react-hot-toast';
import { imageUpload } from '../../Api/Utlis';
import { useState } from 'react';
import axios from 'axios';
import SocialLink from './SocialLink';
import { GiSpinningBlades } from "react-icons/gi";





const SignUp = () => {
  const navigate = useNavigate()
  const [error,setError] = useState('')
  const { createUser,
    loading,
    setLoading,
    
   updateUserProfile} = useAuth()
 
 

  const handleSubmit = async e =>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const role = form.role.value
    const email = form.email.value
    const password = form.password.value
    const image = form.image.files[0]
  const designation = form.designation.value
  const salary = form.salary.value
  const bank_account_no = form.bank_account_no.value
  const isVerfied = false
  console.log({name,role,email,password,image,designation,salary,bank_account_no});
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      toast.error("Password must be at least 6 characters long");
      setLoading(false)
      return;
    }
    
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one capital letter");
      toast.error("Password must contain at least one capital letter");
      setLoading(false)
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setError("Password must contain at least one special character");
      toast.error("Password must contain at least one special character");
      setLoading(false)
      return;
    }

try{
  setLoading(false)
  // upload image and get image url
  const image_url = await imageUpload(image)
  console.log(image_url)


// User Registration
const result = await createUser(email,password)
console.log(result);

// save user name and photo
await updateUserProfile(name,image_url)

// save userData to DB 
const userData = {
  name,
  role,
  email,
  password,
  image_url,
  designation,
  salary,
  bank_account_no,
  isVerfied
};
const response = axios.post('https://work-track-server.vercel.app/users',userData)
.then(res=>{
  console.log(res.data);
})
// post userData to db
if (response.status === 200) {
  console.log(response.data);
  toast.success('Signup Successful');
  navigate('/');
} else {
  toast.error('Failed to save user data');
  console.error('Failed to save user data', response);
}


navigate('/')
toast.success('Signup Successful')
}catch(err){
console.log(err);
toast.error(err.message)
}



  }
  



  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-green-600 text-4xl font-bold'>Please Registration Your Data  With Carefully</h1>
          <p className='text-sm text-gray-400'>Welcome to <span className='text-violet-900 text-lg font-serif'>WorkTrack</span></p>
        </div>
        <form
        onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            <div>
            <label htmlFor='name' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              
              />
            </div>
            
            <div>
  <label htmlFor="role" className="block mb-2 text-sm ">Your Role</label>
               
  <select id="role" name='role' required  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'>
    <option selected>Choose  Your Role</option>
    <option value="admin" disabled>Admin</option>
    <option value="hr">HR</option>
    <option value="employee">Employee</option>
   
  </select>
</div>
            </div>
          
          <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            

            <div>
  <label htmlFor="designation" className="block mb-2 text-sm ">Your Designation</label>
               
  <select id="designation" name='designation' required  className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'>
    <option selected>Your Designation</option>
    <option value="HR Administration">HR Administration</option>
    <option value="Sales Assistant">Sales Assistant</option>
    <option value="Digital Marketer">Digital Marketer</option>
    <option value="Social Media Executive">Social Media Executive</option>
    <option value="Support Executive">Support Executive</option>
    <option value="Other">Other</option>
   
  </select>
</div>

            {/* fdssgfsdgf */}
            <div>
            <div>
            <label htmlFor='name' className='block mb-2 text-sm'>
            Your Salary
              </label>
              <input
                type='number'
                name='salary'
                id='salary'
                placeholder='Salary'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            </div>
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Bank Account No.
              </label>
              <input
                type='text'
                name='bank_account_no'
                id='bank_account_no'
                required
                placeholder='Enter Your Bank Account No.'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
             
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            {error &&   <p><small className='text-red-400'>{error}</small></p>}
            </div>
          </div>

          <div>
            <button
            disabled={loading}
              type='submit'
              className='bg-cyan-600 w-full rounded-md py-3 text-white'
            >
            {loading? <GiSpinningBlades className='animate-spin m-auto'/>:'continue'}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        
       {/* social link */}
<div className='items-center justify-center text-center'>
  
<SocialLink/>

</div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp
