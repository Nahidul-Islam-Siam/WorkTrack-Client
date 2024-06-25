import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";

import router from './Routes/Routes.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider> <QueryClientProvider client={queryClient}>
    <AuthProvider>

<RouterProvider router={router} />
<Toaster />
</AuthProvider>
    </QueryClientProvider></HelmetProvider>
   

  </React.StrictMode>,
)
