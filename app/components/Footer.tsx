import React from 'react'
import Image from 'next/image'
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Button } from "@/components/ui/button"
const Footer = () => {
  return (
    <div className='pt-10 pb-6 flex flex-col justify-center items-center border-t-2 border-gray-200'>
        <Image src="/logo.webp" alt="" className='rounded-xl mb-2' width={60} height={60}/>
        <div className='text-[#6541f1] text-2xl font-bold pb-5'>ahead</div>
        <div className='flex pb-10'>
            <div className='flex pe-6'>
                <MapPin className='me-1'/>
                <div>AugustsatraBe 26, 10117 Berlin</div>
            </div>
            <div className='flex'>
                <Mail className='me-1'/>
                <div>hi@ahead-app.com</div>
            </div>
        </div>
        <Button className='rounded-xl px-3 py-2 h-fit w-fit'>
            <div className='flex justify-between items-center'>
                <div className='pe-3'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M25.565,9.785c-0.123,0.077 -3.051,1.702 -3.051,5.305c0.138,4.109 3.695,5.55 3.756,5.55c-0.061,0.077 -0.537,1.963 -1.947,3.94c-1.119,1.703 -2.361,3.42 -4.247,3.42c-1.794,0 -2.438,-1.135 -4.508,-1.135c-2.223,0 -2.852,1.135 -4.554,1.135c-1.886,0 -3.22,-1.809 -4.4,-3.496c-1.533,-2.208 -2.836,-5.673 -2.882,-9c-0.031,-1.763 0.307,-3.496 1.165,-4.968c1.211,-2.055 3.373,-3.45 5.734,-3.496c1.809,-0.061 3.419,1.242 4.523,1.242c1.058,0 3.036,-1.242 5.274,-1.242c0.966,0.001 3.542,0.292 5.137,2.745zM15.001,6.688c-0.322,-1.61 0.567,-3.22 1.395,-4.247c1.058,-1.242 2.729,-2.085 4.17,-2.085c0.092,1.61 -0.491,3.189 -1.533,4.339c-0.935,1.242 -2.545,2.177 -4.032,1.993z"></path></g></g>
                </svg></div>
                <div>
                    <div className='text-xs'>Download on the</div>
                    <div className='text-xl'>AppStore</div>
                </div>
            </div>
        </Button>
        <div className='pt-4'>© 2022 Ahead app. All right reserved</div>
    </div>
  )
}

export default Footer