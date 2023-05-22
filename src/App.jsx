import React, { useContext } from 'react';
import { Outlet } from "react-router-dom"
import Navbar from "./pages/shared/Navbar"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './providers/AuthProvider';
import { HashLoader } from 'react-spinners';
import Footer from './pages/shared/Footer';

function App() {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className='mt-48 flex justify-center'>
       <HashLoader color="red" />
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
      <Toaster
        position="right-center"
        reverseOrder={false}
      />
    </>
  )
}

export default App
library.add(fas, far)
