import React from 'react'

const Footer = () => {
  return (
    <div className='relative '>
        <img src="/assets/images/footer.png" alt="img" className='w-full md:block hidden'/>
        <div className='grid px-4 md:px-0 space-y-4 md:space-y-0 bg-black md:bg-transparent w-full top-0 py-10 grid-cols-12 absolute'>
          <div className='col-span-12 md:col-span-6'></div>
          <div className='col-span-12 md:col-span-3'>
            <div className='font-semibold text-[1.2rem] text-[#EB6D27]'>CATEGORY</div>
            <div className='pt-4 text-white space-y-3'>
                <span className='block'>WOMEN</span>
                <span className='block'>MEN</span>
                <span className='block'>ELECTRONICS</span>
            </div>
          </div>
          <div className='col-span-12 md:col-span-3'>
            <div className='font-semibold text-[1.2rem] text-[#EB6D27]'>LEGAL</div>
            <div className='pt-4 text-white space-y-3'>
                <span className='block'>Privacy Policy</span>
                <span className='block'>Terms of Service </span>
                <span className='block'>Cooking Policy</span>
                <span className='block'>Sitemap</span>
            </div>
          </div>
          <div className='col-span-12 pt-5 md:pt-20'>
             <div className='text-center text-gray-200 text-[.8rem]'>Copyright &copy; 2024 Trippybug. All rights reserved</div>
          </div>
        </div>
    </div>
  )
}

export default Footer