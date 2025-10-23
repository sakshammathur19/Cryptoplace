import React, { useContext } from 'react'
import Coins from './Coins'
import { CoinContext } from '../Context/Coincontext'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const {setCurrency}=useContext(CoinContext)
  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd":{
        setCurrency({name:"usd" ,symbol:"$"});
        break;
      }
      case "eur":{
        setCurrency({name:"eur" ,symbol:"€"});
        break;
      }
      case "inr":{
        setCurrency({name:"inr" ,symbol:"₹"});
        break;
      }
      default : {
        setCurrency({name:"usd" ,symbol:"$"});
        break;
      }
      
    }

  }
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-5 px-5 md:px-16 text-[#ddd] border-b-2 border-[#3c3c3c] w-full max-w-[1200px] mx-auto">
  {/* Logo */}
  <Link to={'/'}>
  <img
    src="/src/assets/logo.png"
    className="w-[120px] md:w-[max(12vw,120px)] mb-4 md:mb-0"
    alt="Logo"
  />
  </Link>

  {/* Navigation Links */}
  <ul>
  <Link to={'/'} className="flex flex-col md:flex-row gap-4 md:gap-12 list-none mb-4 md:mb-0 text-center">
    <li className="cursor-pointer hover:text-white transition-colors">Home</li>
    <li className="cursor-pointer hover:text-white transition-colors">Features</li>
    <li className="cursor-pointer hover:text-white transition-colors">Pricing</li>
    <li className="cursor-pointer hover:text-white transition-colors">
      <Link to="/blog">Blog</Link></li>
  </Link>
  </ul>

  
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-3">

    <select
      className="px-3 py-2 border border-gray-300 bg-white rounded-full shadow-md cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-black"
      onChange={currencyHandler}
    >
      <option value="usd">USD</option>
      <option value="eur">EUR</option>
      <option value="inr">INR</option>
    </select>

 
    <button className="flex items-center gap-2 md:gap-3 px-6 py-2 text-[15px] text-[#393939] bg-white rounded-full shadow-md border border-gray-200 cursor-pointer hover:bg-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      Sign Up
      <img
        src="/src/assets/arrow_icon.png"
        alt="arrow icon"
        className="w-4 md:w-5"
      />
    </button>
  </div>
</div>

  )
}

export default Navbar
