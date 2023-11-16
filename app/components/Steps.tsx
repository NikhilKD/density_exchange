import React from 'react'
import { Button } from "@/components/ui/button"

const Steps = () => {
  return (
    <div className='py-28 flex justify-center'>
        <div className='w-11/12 max-w-[1400px] rounded-[30px] h-[90vh] min-h-[800px] p-16 bg-[#edf8fe] flex flex-col justify-center items-center'>
            <div className='text-xl font-medium pb-3'>Let your friends, family, and co-workers (anonymously) rate your social skills.</div>
            <div className='text-6xl font-bold pb-20'>Ever wondered what others think of you?</div>
            <ol className="flex items-center justify-center w-8/12">
                <li className="flex w-full items-center text-[#eac27d] dark:text-[#eac27d] after:content-[''] after:w-full after:h-1 after:border-b after:border-[#eac27d] after:border-4 after:inline-block dark:after:border-[#eac27d]">
                    <img src="stepper.png" alt="" className='w-16'/>
                </li>
                <li className="flex w-full items-center text-[#eac27d] dark:text-[#eac27d] after:content-[''] after:w-full after:h-1 after:border-b after:border-[#eac27d] after:border-4 after:inline-block dark:after:border-[#eac27d]">
                    <img src="stepper.png" alt="" className='w-16'/>
                </li>
                
                <li className="flex items-center">
                    <img src="stepper.png" alt="" className='w-40'/>
                </li>
            </ol>
            <div className='mt-20 px-10 py-32 bg-white shadow-lg w-8/12 rounded-2xl'>
                <div className='flex justify-between relative z-20'>
                    <div className='relative'>
                        <div className='rounded-full w-7 h-7 bg-[#6341EF]'></div>
                        <Button className='bg-[#6341EF] absolute -top-16 -left-10'>You</Button>
                    </div>
                    <div className='relative'>
                        <div className='rounded-full w-7 h-7 bg-[#41C2FB]'></div>
                        <Button className='bg-[#41C2FB] absolute -bottom-16 -left-0'>Anonymonos 1</Button>
                    </div>
                    <div className='relative'>
                        <div className='rounded-full w-7 h-7 bg-[#FDB037]'></div>
                        <Button className='bg-[#FDB037] absolute -top-16 -left-0'>Anonymonos 2</Button>
                    </div>
                    <div className='relative'>
                        <div className='rounded-full w-7 h-7 bg-[#58C896]'></div>
                        <Button className='bg-[#58C896] absolute -bottom-16 -left-0'>Anonymonos 3</Button>
                    </div>
                </div>
                <div className='relative -top-4 z-10'><hr /></div>
                
            </div>
        </div>
    </div>
  )
}

export default Steps