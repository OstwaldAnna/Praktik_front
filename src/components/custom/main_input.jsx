import React from 'react'

const MainInput = ({ id, placeholder="", type = "text", className = "", ...props }) => {
  return (
    <input 
    id={id} 
    type={type} 
    placeholder={placeholder} 
    className={`w-full bg-transparent placeholder:text-[accent-text] border border-[#E2E8F0] rounded-lg
        py-2.5 px-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400
        ${className}`}/>

  )
}

export default MainInput