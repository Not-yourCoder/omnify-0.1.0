import { images } from '@/constants/images';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';
import React from 'react';

type Props = {}

const SidebarCompressed = (props: Props) => {
    const { toggleExpand } = useAppContext();

    return (
        <div className='p-4 h-screen max-w-[80px] flex flex-col border shadow-md items-center transition-all duration-300 ease-in-out'>
            <div className='py-4 w-10 hover:cursor-pointer' onMouseOver={toggleExpand}>
                <Image src={images.logo} width={32} height={24} alt='logo' />
            </div>
            <div className='flex flex-col items-center gap-4 py-4 mt-10 relative'>
                <div className='p-3 w-12 border-b-2 bg-white rounded-xl z-30'>
                    <Image src={images.arrow_lr} width={24} height={24} alt='icon' />
                </div>
                <div className='bg-gray-200 p-[5px] rounded-xl border-b-2 top-[62px] absolute z-10'>
                    <Image src={images.globe} width={20} height={24} alt='icon' />
                </div>
            </div>
            <div className='flex flex-col items-center gap-4 py-4 mt-8'>
                <div className='bg-white w-12 rounded-xl border-b-2 p-3'>
                    <Image src={images.orders} width={24} height={24} alt='icon' />
                </div>
                <Image src={images.subscription} width={24} height={24} alt='icon' />
                <Image src={images.calenderDays} width={24} height={24} alt='icon' />
            </div>
            <div className='flex flex-col w-12 items-center gap-4 py-4 mt-auto'>
                <Image src={images.redirect} width={24} height={24} alt='icon' />
                <Image src={images.profileImage} width={24} height={24} alt='icon' />
                <Image src={images.help} width={24} height={24} alt='icon' />
            </div>
        </div>
    );
}

export default SidebarCompressed;
