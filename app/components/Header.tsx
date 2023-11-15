import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <>
      <div className='px-20 py-6 flex justify-between items-center fixed top-0 left-0 w-full'>
        <div>
          <Image src="/logo.webp" alt="" className='rounded-xl' width={50} height={50}/>
        </div>
        <div className='flex justify-between items-center'>
          <div className='text-md font-semibold pe-8 cursor-pointer'>Emotions</div>
          <div className='text-md font-semibold pe-8 cursor-pointer'>Manifesto</div>
          <div className='text-md font-semibold pe-8 cursor-pointer'>Self-awareness test</div>
          <div className='text-md font-semibold cursor-pointer'>Work With Us</div>
        </div>
        <div>
          <Button className='rounded-full px-6 py-6'>Download App</Button>
        </div>
      </div>
    </>
  )
}

export default Header