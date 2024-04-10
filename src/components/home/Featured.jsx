import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { AddToCart } from '../../redux/ReduxSlice'
import {toast} from 'react-toastify'
import { BASE_URL } from '../../apiConfig/ApiBaseUrl'
import { API_PATH } from '../../apiConfig/ApiPath'

const Featured = () => {
    const [cate, setCate] = useState([]) //Category State

    //Category Api is Here
    const handelCategory=async()=>{
      try {
        const response=await axios.get(BASE_URL+API_PATH.apicategory)
        if(response?.data){
           setCate(response.data)
        }
      } catch (error) {
        
      }
    }


    const [state, setState] = useState(null) //Category Active State
    const dispatch=useDispatch() //Dispatch Reducer Function

    const [product, setProduct] = useState([]) //Product State
    //Product Api is here
    const HandelProduct = async () => { 
        try {
            const response = await axios.get(BASE_URL+API_PATH.apiproduct)
            setProduct(response.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        HandelProduct() //GetProduct Data Function
        handelCategory() //GetCategory Data Function
    }, [])

    const CartProduct = useSelector((state) => state.ecomStore.cartproduct)
    const handelAddtocart = (data) => {
        const isItemAlreadyInCart = CartProduct.find((item) => item.id ==data.id);

        if (isItemAlreadyInCart) {
            toast('Item Already Exist!', { type: 'error' });
        } else {
            dispatch(AddToCart(data)); // Dispatching the AddToCart action
            toast('Product added into cart!', { type: 'success' });
        }
    };

    const [newdata,setNewData]=useState() //Filter Product State
    const handelCategoryFilter=(ind,data)=>{ //Filter Product Function
       const filterdata=product?.filter((item)=>item?.category===data)
       if(filterdata?.length>0){
          setNewData(filterdata)
       }
       setState(ind);
    }

    return (
        <div className='bg-white py-5 md:py-10'>
            <div className='Component px-4 md:px-0'>
                <div className='text-[1.1rem] text-[#EB6D27]  font-bold'>BEST OFFERS</div>
                <div className='md:flex justify-between'>
                    <div className='text-[#1E1E1E] font-bold text-[1.8rem]'>Featured</div>
                    <div className='flex items-center flex-wrap  md:space-x-3'>
                        {
                            cate.map((item, ind) => (item==='jewelery'?'':<div onClick={()=>handelCategoryFilter(ind,item)} className={` ml-1 mt-2 ${state === ind ? 'bg-[#EB6D27] text-white' : 'bg-gray-100 text-black border border-gray-600'} capitalize px-5 py-1.5 cursor-pointer hover:scale-110 transition-all text-[.8rem] md:text-[.9rem] font-semibold  rounded-[4rem]`}>{item}</div>))
                        }
                    </div>
                </div>
                {/* Product is here */}
                <div className='grid grid-cols-12 pt-8 space-y-4 md:space-y-0 md:gap-5'>
                    {
                        newdata?.length>0?
                        newdata?.map((item, ind) => (
                            <div className='flex flex-col col-span-12 md:col-span-3 p-4 border border-black rounded-2xl'>
                                <div>
                                  <img src={item.image} alt="img"/>
                                  <div className='text-black pt-2 font-bold text-center text-[.8rem]'>{item.title}</div>
                                  <div className='text-gray-500 text-[.7rem] text-center font-semibold pt-1.5'>Get 50% on Winner sets</div>
                                
                                </div>
                                <div className='flex items-center mt-auto justify-between pt-4'>
                                    <span className='text-[#EB6D27] font-semibold'>₹{item.price}</span>
                                    <button  onClick={()=>handelAddtocart(item)} className='bg-[#EB6D27] text-white hover:scale-110 transition-all  text-[.8rem] px-4 py-1.5 rounded-xl'>Add to Cart</button>
                                </div>
                            </div>
                        )):
                        product?.map((item, ind) => (
                            <div className='flex flex-col col-span-12 md:col-span-3 p-4 border border-black rounded-2xl'>
                                <div>
                                  <img src={item.image} alt="img"/>
                                  <div className='text-black pt-2 font-bold text-center text-[.8rem]'>{item.title}</div>
                                  <div className='text-gray-500 text-[.7rem] text-center font-semibold pt-1.5'>Get 50% on Winner sets</div>
                                
                                </div>
                                <div className='flex items-center mt-auto justify-between pt-4'>
                                    <span className='text-[#EB6D27] font-semibold'>₹{item.price}</span>
                                    <button  onClick={()=>handelAddtocart(item)} className='bg-[#EB6D27] text-white hover:scale-110 transition-all  text-[.8rem] px-4 py-1.5 rounded-xl'>Add to Cart</button>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Featured