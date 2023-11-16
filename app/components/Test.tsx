import React from 'react'
import { Button } from "@/components/ui/button"
const Test = () => {
  return (
    <div className='py-28 flex justify-center'>
        <div className='w-11/12 max-w-[1400px] rounded-[30px] h-[60vh] min-h-[500px] p-16 bg-white flex flex-col items-center justify-center'>
            <div className='text-xl font-medium pb-3'>We take privacy seriously</div>
            <div className='text-5xl font-bold pb-8'>Before you get started</div>
            <div className='text-2xl font-medium pb-8 text-gray-800 w-8/12 text-center'>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</div>
            <div className='text-xl font-medium pb-10'>with love, <span className='sign text-5xl'>Team alod</span></div>
            <Button className='mb-4'>Start a test</Button>
            <div className='text-gray-600'>Take only 5 minutes</div>
        </div>
    </div>
  )
}

export default Test