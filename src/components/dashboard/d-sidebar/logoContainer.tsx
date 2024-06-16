
import { images } from '@/constants/images'
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image'
import React from 'react'



const LogoContainer = () => {
    const { toggleExpand } = useAppContext();

    return (
        <div className='px-2 py-8'>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <Image src={images.logo} width={30} height={30} alt="logo" />
                        <div className='text-2xl max-[1600px]:text-xl font-bold flex items-center gap-1'>
                            Front<div className='bg-black w-[6px] h-[6px] rounded'></div>Desk
                        </div>
                    </div>
                    <div onClick={toggleExpand}>
                        <Image src={images.frame} width={24} height={24} alt="toggle_sidebar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoContainer