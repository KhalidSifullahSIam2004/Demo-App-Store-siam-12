import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Routes'
import { ToastContainer } from 'react-toastify'
import InstalledAppsContextProvider from './Contexts/InstalledAppsContextProvider'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <InstalledAppsContextProvider>

  <RouterProvider router={router}/>
   <ToastContainer />
   
  </InstalledAppsContextProvider>
  </StrictMode>,
)
