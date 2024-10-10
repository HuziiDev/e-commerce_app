import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-x-gray-400'>
        {/* Hero left side  */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">

            <div className="text-[#414141]">
                <div className="flex items-center gap-2">
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1  className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed placeholder:'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>
        {/* Right side */}
        <img className='w-full sm:w-1/2 ' src="https://uk1.sportal365images.com/process/smp-image-api/livescore.com/23012024/b4a32bbf-2e73-4f49-8a49-1dd5d57b7b75.jpg" alt="" />
    </div>
  )
}

export default Hero