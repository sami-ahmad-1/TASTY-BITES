import React,{useState} from 'react'
import Navbar from '../Components/Navbar'
import ChoiceBtn from '../Components/ChoiceBtn'
import Card from '../Components/Card'
import Cart from '../Components/Cart'

import { Toaster } from 'react-hot-toast'

function Home() {
  return (
    <div style={{ userSelect: 'none' }}>
      <Navbar/>
      <ChoiceBtn/>
      <Card/>
      <Cart/>
      <Toaster />
    </div>
  )
}

export default Home

      