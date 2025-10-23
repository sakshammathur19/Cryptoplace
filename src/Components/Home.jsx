import React, { useEffect, useState, useContext } from "react";
import { CoinContext } from "../Context/Coincontext";
import {Link } from 'react-router-dom'

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input,setinput]=useState('');

  const inputHandler=(event)=>{
     setinput(event.target.value);
     if(event.target.value===""){
      setDisplayCoin(allCoin);
     }

  }
  const searchHandler=async(event)=>{
    event.preventDefault();
    const coins =await allCoin.filter((item)=>{
       return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
    //bitcoin 
    //bit 
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-[10px] text-center">
      {/* Hero Section */}
      <div className="max-w-[600px] flex mx-auto mt-[80px] mb-[60px] flex-col items-center text-center gap-[30px]">
        <h1 className="text-[max(4vw,36px)] font-bold leading-tight">
          Largest <br /> Crypto Marketplace
        </h1>

        <p className="w-[75%] text-[#e3e3e3] leading-[1.6]">
          Welcome to the world's largest Cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>

        
        <form onSubmit={searchHandler} className="px-2 w-[80%] bg-white border-r-[5px] text-[20px] flex justify-between items-center gap-[20px] mx-auto mt-[40px] rounded-lg shadow-md">
          <input onChange={inputHandler} list="coinlist" value={input}
            type="text"
            placeholder="Search Crypto.."
            className="flex-1 px-[20px] py-[18px] text-[18px] text-gray-700 outline-none border-none rounded-l-lg"
          required/>
          <datalist id="coinlist">
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
          </datalist>
          <button
            type="submit"
            className="py-[18px] px-[25px] bg-[#0b004e] text-white font-semibold rounded-r-lg hover:bg-[#1d152f] transition-all"
          >
            Search
          </button>
        </form>
      </div>

      {/* Crypto Table */}
      <div className="max-w-[900px] mx-auto mb-16 mt-[60px] rounded-2xl bg-gradient-to-r from-[rgba(84,3,255,0.15)] to-[rgba(105,2,153,0.15)] border border-[#3c3c3c]/40 shadow-[0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-md">
        {/* Header */}
        <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-6 py-4 items-center border-b border-[#3c3c3c]/60 text-sm font-semibold text-gray-200 uppercase tracking-wide">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p className="text-center">24h Change</p>
          <p className="text-right">Market Cap</p>
        </div>

        {/* Rows */}
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`}
            key={index}
            className=" grid grid-cols-[0.5fr_2fr_1fr_1fr_1.5fr] px-6 py-4 items-center border-b border-[#3c3c3c]/60 text-sm text-gray-300"
          >
            <p>{item.market_cap_rank}</p>
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-6 h-6" />
              <p>
                {item.name} <span className="uppercase text-gray-400">({item.symbol})</span>
              </p>
            </div>
            <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
            <p
              className={`text-center ${
                item.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-400"
              }`}
            >
              {item.price_change_percentage_24h.toFixed(2)}%
            </p>
            <p className="text-right">{currency.symbol}{item.market_cap.toLocaleString()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
