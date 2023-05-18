import React from 'react';
import { Outlet } from "react-router-dom"
import Navbar from "./pages/shared/Navbar"
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
library.add(fas,far)
