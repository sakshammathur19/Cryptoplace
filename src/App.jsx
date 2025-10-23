import React from 'react'
import Navbar from './Components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import Coins from './Components/Coins'
import Footer from './Components/Footer'
import Blog from './Components/Blog'

const App = () => {
  return (
    <div className='min-h-[100vh] text-white bg-gradient-to-b from-[#0b004e] via-[#1d152f] to-[#002834] '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coins/>}/>
       <Route path="/Blog" element={<Blog />} />  

    
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
} 

export default App
