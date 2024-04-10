import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { IoCloseCircle } from "react-icons/io5";
import { DecrementProductQuantity, IncrementProductQuantity, RemoveCartP } from '../../redux/ReduxSlice';
import { FaArrowLeft } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

const Cart = () => {

    const Navigate=useNavigate() //Navigate from one Page To Another
    const CartProduct = useSelector((state) => state.ecomStore.cartproduct) //Get Data from Redux
    const dispatch=useDispatch() //Dispatch Reducer Function

    console.log(CartProduct)
    return (
        <div className='bg-white'>
            <div className='Component px-4 md:px-0 py-4 md:py-10'>
                <FaArrowLeft onClick={()=>Navigate('/')} size={20} className='cursor-pointer'/>
                <div className='text-[#EB6D27] font-semibold text-[1.1rem]'>SELECTED ITEMS</div>
                <div className='text-black font-bold text-[1.1rem]'>CART ITEMS</div>
                {/* Cart Items is here */}
                <div className='grid  grid-cols-12 md:space-y-0 space-y-4 md:gap-5 pt-10 md:pt-20'>
                    {
                        CartProduct?.length>0?CartProduct?.map((item, ind) => (
                        <div className='relative flex items-center border-black space-x-5 rounded-md p-2 col-span-12 md:col-span-4  border'>

                            <div>
                                <img src={item.image} alt="img" className='h-full' />
                            </div>
                            <div>
                                <div className='text-black font-semibold text-[.9rem]'>{item.title}</div>
                                <div className='flex items-center justify-between pt-3 w-[250px]' >
                                    <div className='text-black font-semibold text-[.7rem]'>{item.category}</div>
                                    <div className='flex items-center space-x-4'>
                                        <FaPlus onClick={()=>dispatch(IncrementProductQuantity(item?.id))} className='text-[#EB6D27] cursor-pointer hover:scale-125 transition-all' />
                                        <span>{item.Count}</span>
                                        <FaMinus onClick={()=>dispatch(item?.Count==1?RemoveCartP(item.id):DecrementProductQuantity(item?.id))} className='text-[#EB6D27] cursor-pointer hover:scale-125 transition-all' />
                                    </div>
                                </div>
                                <div className='font-semibold text-[.9rem] text-[#EB6D27] pt-3'>₹{(item.price)*item.Count}</div>
                            </div>
                            {/* Close Icons */}
                             <IoCloseCircle onClick={()=>dispatch(RemoveCartP(item.id))} size={25} className='absolute -top-2 text-[#EB6D27] cursor-pointer -right-2'/> 
                        </div>)):<div className='col-span-12'><img src='/assets/images/cartempty.png' alt='img' className='md:w-[30%] mx-auto'/><div className='text-black font-semibold text-center text-[1.3rem]'>Cart is Empty !</div></div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart