import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import {App} from './App'

createRoot(document.getElementById('root')).render(
  
  <AuthProvider>
    <StrictMode>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition: Bounce
        bodyClassName="toastBody"
      />
    </StrictMode>,
  </AuthProvider>
  
)
