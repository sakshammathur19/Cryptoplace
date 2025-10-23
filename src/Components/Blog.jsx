import React from 'react'

const blog = () => {
  return (
    <div className=' min-h-[80vh] flex flex-col justify-center items-center text-white ' >
        <h1 className='text-5xl font-bold mb-4'>Welcome to our Blog here we are </h1>
        <p className='text-gray-300 text-center max-w-xl'>Welcome to our blog! Here you can share updates, crypto news, and insights.
</p> 
<div className="mt-12 w-full max-w-md">
        <form className="flex flex-col gap-4 bg-[#1d152f] p-6 rounded-lg shadow-md">
          <h2 className="text-center font-bold text-2xl mb-4">Register With Us</h2>
          <input
            type="text"
            placeholder="Enter your name"
            className="px-4 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#4500c6] text-black"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border-2 border-gray-400 rounded-lg focus:outline-none focus:border-[#4500c6] text-black"
          />
          <button
            type="submit"
            className="mt-2 bg-[#4500c6] hover:bg-[#330099] transition-all text-white py-2 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>
      </div>   
    </div>
  )
}

export default blog
