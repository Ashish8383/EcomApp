import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {

    const data = [
        {
            id: 1,
            image1: 'assets/images/c1.svg',
            image2: 'assets/images/c1text.png',
            image3: 'assets/images/cb1.png',
            image4: 'assets/images/c1img.svg'
        },
        {
            id: 2,
            image1: 'assets/images/c2.png',
            image2: 'assets/images/c1text.png',
            image3: 'assets/images/cb1.png',
            image4: 'assets/images/c2img.png'
        },
        {
            id: 3,
            image1: 'assets/images/c3.png',
            image2: 'assets/images/c1text.png',
            image3: 'assets/images/cb1.png',
            image4: 'assets/images/c3img.png'
        }
    ]

    return (
        <>
            <div className='bg-white'>
                <div className='Component'>
                    <Carousel emulateTouch={true}>
                        {
                            data?.map((item, ind) => (
                                <div className='relative' key={ind}>
                                    <img src={item.image1} />
                                    <div className='grid absolute top-0 left-0 w-full grid-cols-12 md:gap-x-6'>
                                        <div className='col-span-6 p-4 md:p-8'>
                                            <img src={item?.image2} alt="img" />
                                            <div className='w-[50%] cursor-pointer hover:scale-90 transition-all'>
                                                <img src={item?.image3} alt="img" />
                                            </div>
                                        </div>
                                        <div className='col-span-6 pr-2 pl-6 md:p-8'>
                                            <img src={item.image4} alt="img" className='translate-y-10' />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Banner