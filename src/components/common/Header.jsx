import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import {useSelector} from 'react-redux'
import {useNavigate} from "react-router-dom"


const Header = () => {
    const Navigate=useNavigate()
    const CartProduct=useSelector((state)=>state.ecomStore.cartproduct)


  return (
    <div className='bg-white'>
        <div className='Component items-center px-4 md:px-0 justify-between flex  py-2'>
            {/* logo */}
            <div>
                <img src="/assets/images/logo.png" alt="img" className='w-[70px] cursor-pointer'/>
            </div>
            {/* search */}
            <div className='flex bg-white items-center border translate-y-10 border-black w-[60%] md:w-[35%] z-[50] rounded-2xl space-x-2 shadow-lg'>
               <IoSearchSharp size={20} className='ml-2'/>
               <input type='search' placeholder='Search your favorite clothing' className='outline-none text-[.9rem] w-full py-1 px-3 rounded-2xl '/> 
            </div>
            {/* cart */}
            <div onClick={()=>Navigate('/cart')} className='flex relative items-center space-x-3 hover:scale-110 transition-all cursor-pointer'>
              <FaShoppingCart size={25} className='text-[#EB6D27]'/>
              <span>Cart</span>
              <span className='absolute -top-2 right-8 font-semibold px-[.35rem] py-[.1rem] rounded-[100%] text-[.5rem] bg-black text-white'>{CartProduct?.length}</span>
            </div>
        </div>
    </div>
  )
}

export default Header