import React from 'react'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'

function RootLayouts() {
  return (
  <>
   <Navbar/>
   <Outlet/>
   <Footer/>
  </>
  )
}

export default RootLayouts