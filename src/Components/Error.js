import React from 'react'
import { NavLink } from "react-router-dom";
import page from "../assets/page.png";

const Error = () => {
  return (
  <>
    <div className="flex justify-center items-center mt-40" > 
     <img className="h-60 " src={page}/>
    </div>
    <div className="flex justify-center mt-5">
    <NavLink className="text-2xl text-white font-bold bg-green-500 p-2 shadow-xl rounded-md" to="/react">Return To Home !</NavLink>
    </div>
    </>
  )
}

export default Error
