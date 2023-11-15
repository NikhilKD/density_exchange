"use client"
import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const SliderHome = () => {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      mode: "free",
      slides: {
        origin: "center",
        perView: 3.5,
        spacing: 10,
      }
    }
  )
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='w-11/12 pb-20 max-w-[1400px]'>
                <div className='text-6xl font-bold'>Does this sound familier...</div>
            </div>
            <div className='w-full pb-28'>
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide py-10 px-5">
                  <div className="p-10 bg-[#6341EF] rounded-2xl rotate-12">
                    <div className='text-3xl mb-4'>😌</div>
                    <div className='text-xl font-bold pb-2 text-white'>You argue with a colleague</div>
                    <div className='text-md font-medium text-white '>you get angry and defensive, instead of staying and working towards common ground.</div>
                  </div>
                </div>
                <div className="keen-slider__slide py-10 px-5">
                  <div className="p-10 bg-[#D8F2FF] rounded-2xl">
                    <div className='text-3xl mb-4'>😌</div>
                    <div className='text-xl font-bold pb-2 '>You argue with a colleague</div>
                    <div className='text-md font-medium '>you get angry and defensive, instead of staying and working towards common ground.</div>
                  </div>
                </div>
                <div className="keen-slider__slide py-10 px-5">
                  <div className="p-10 bg-[#EEEBFE] rounded-2xl">
                    <div className='text-3xl mb-4'>😌</div>
                    <div className='text-xl font-bold pb-2 '>You argue with a colleague</div>
                    <div className='text-md font-medium  '>you get angry and defensive, instead of staying and working towards common ground.</div>
                  </div>
                </div>
                <div className="keen-slider__slide py-10 px-5">
                  <div className="p-10 bg-[#FFEFD5] rounded-2xl">
                    <div className='text-3xl mb-4'>😌</div>
                    <div className='text-xl font-bold pb-2 '>You argue with a colleague</div>
                    <div className='text-md font-medium  '>you get angry and defensive, instead of staying and working towards common ground.</div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SliderHome