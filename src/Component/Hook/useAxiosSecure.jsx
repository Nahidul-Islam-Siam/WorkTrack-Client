import axios from 'axios'
import { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import useAuth from './UseAuth'


export const axiosSecure = axios.create({
  baseURL: 'https://work-track-server.vercel.app',
  withCredentials: true,
})
const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      res => {
        return res
      },
      async error => {
        console.log('error tracked in the interceptor', error.response)
        if (error.response.status === 401 || error.response.status === 403) {
          await logOut()
          navigate('/login')
        }
        return Promise.reject(error)
      }
    )
  }, [logOut, navigate])

  return axiosSecure
}

export default useAxiosSecure
