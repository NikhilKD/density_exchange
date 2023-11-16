import React from 'react'
import { Button } from "@/components/ui/button"

const Vacancy = () => {
  return (
    <div className='parent_card pb-32 flex justify-center'>
        <div className='w-11/12 max-w-[1400px] rounded-[30px] bg-white'>
            <div className='flex justify-between items-center pb-16'>
                <div data-aos="fade-right" className='text-5xl font-bold'>Open vacancies</div>
            </div>
            <div className='flex justify-between'>
                <div className='basis-4/12 '>
                    
                    <a href="#" className="cards block max-w-sm p-6 bg-[#fefbec] rounded-lg shadow-lg">

                    <h5 className="mb-2 pb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Full-Stack Engineer</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul className='ml-5'>
                            <li className='pb-3'>Full-time position</li>
                            <li className='pb-3'>Berlin or remote</li>
                            <li className='pb-3'>eqquity share options</li>
                            <Button data-aos="fade-up" className='mb-4 mt-7 rounded-2xl'>See Details</Button>
                        </ul>
                    </p>
                    </a>

                </div>
                <div className='basis-4/12 '>
                    
                    <a href="#" className="cards block max-w-sm p-6 bg-[#fefbec] rounded-lg shadow-lg">

                    <h5 className="mb-2 pb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Full-Stack Engineer</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul className='ml-5'>
                            <li className='pb-3'>Full-time position</li>
                            <li className='pb-3'>Berlin or remote</li>
                            <li className='pb-3'>eqquity share options</li>
                            <Button data-aos="fade-up" className='mb-4 mt-7 rounded-2xl'>See Details</Button>
                        </ul>
                    </p>
                    </a>

                </div>
                <div className='basis-4/12 '>
                    
                    <a href="#" className="cards block max-w-sm p-6 bg-[#fefbec] rounded-lg shadow-lg">

                    <h5 className="mb-2 pb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Senior Full-Stack Engineer</h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul className='ml-5'>
                            <li className='pb-3'>Full-time position</li>
                            <li className='pb-3'>Berlin or remote</li>
                            <li className='pb-3'>eqquity share options</li>
                            <Button data-aos="fade-up" className='btn mb-4 mt-7 rounded-2xl'>See Details</Button>
                        </ul>
                    </p>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Vacancy