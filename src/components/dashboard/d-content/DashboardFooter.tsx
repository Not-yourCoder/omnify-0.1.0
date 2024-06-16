import { images } from '@/constants/images'
import useWindowWidth from '@/hooks/useWindowWidth'
import Image from 'next/image'
import React from 'react'

type Props = {}

const DashboardFooter = (props: Props) => {

    const windowWidth = useWindowWidth()
    return (
        <div className={`flex ${windowWidth < 850 && "flex-col gap-2"} justify-between items-center m-4`}>
            <div className='flex items-center gap-4'>
                <div className='text-gray-500'>
                    Displaying
                </div>
                <div className='flex items-center gap-2 px-2 py-1 rounded-lg bg-gray-300/40'>
                    <div className='text-lg'>15</div>
                    <div><Image src={images.updown} width={22} height={22} alt="icon" /></div>
                </div>
                <div className='text-gray-500 font-medium '>out of <span className='font-lg'>104</span></div>
            </div>
            <div className='flex items-center gap-4 mr-6'>
                <div className='flex items-center gap-2'>
                    <Image src={images.left} width={22} height={22} alt="left_icon" />
                    <div className='text-sm'>Previous</div>
                </div>
                <div className='flex items-center gap-5'>
                    <div className='px-3 py-1 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer'>1</div>
                    <div className='px-3 py-1 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer'>2</div>
                    <div className='px-3 py-1 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer'>3</div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='text-sm'>Next</div>
                    <Image src={images.right} width={22} height={22} alt="right_icon" />
                </div>
            </div>
        </div>
    )
}

export default DashboardFooter