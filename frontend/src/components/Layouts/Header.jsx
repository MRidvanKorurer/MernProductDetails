import React, { useContext } from 'react'
import { FaShoppingBag } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import ProductContext from '../../context/ProductContext';

const Header = () => {
  const {basket} = useContext(ProductContext);

  const navigate = useNavigate();


  return (
    <div className=' flex justify-around items-center p-6 bg-indigo-700 text-white '>
        <div>
            <h2 onClick={() => navigate("/")} className=' cursor-pointer font-bold text-2xl italic'>Mern ProductDetails Page</h2>
        </div>
        <div className=' relative'>
            <FaShoppingBag onClick={() => navigate("/basket")} className=' text-2xl cursor-pointer'/>
            <span className=' absolute w-4 -top-3 -right-3 flex justify-center items-center bg-red-600 text-white text-sm rounded-full'>{basket.length}</span>
        </div>
    </div>
  )
}

export default Header