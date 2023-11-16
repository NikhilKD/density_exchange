"use client";
import AOS from 'aos';
import React, { useEffect } from 'react'
import 'aos/dist/aos.css';
import '../../app/globals.css'
import 'animate.css';


const About = () => {
    useEffect(() => {
        AOS.init({
             duration: 500,
             once: false,
           })
     }, [])
  return (
    <div className='py-28 flex justify-center'>
        <div className='w-11/12 max-w-[1400px] rounded-[30px] h-[90vh] min-h-[800px] p-16 bg-[#fef6f1]'>
            <div className='py-28'>
            <div data-aos="fade-right">
            <div className='text-xl font-semibold pb-3' >Build out frustration</div>
                <div className='text-5xl font-bold pb-10'>Meet the ahead app</div>
            </div>
                <div className='flex'>
                    <div className="basis-6/12">
                        <img src="/about.png" alt="" className='w-full'/>
                    </div>
                    <div className="basis-6/12 px-10 py-10" data-aos="fade-left">
                        <div className='text-2xl pb-3 font-medium text-gray-700'>A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</div>
                        <div className='text-2xl pb-3 font-medium text-gray-700'>Think of it as a pocket cheerleadedr towards a better, more fulfilling.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About