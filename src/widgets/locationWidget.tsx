import { colors } from '@/constants/colors';
import { images } from '@/constants/images';
import Image from 'next/image';
import React, { useState } from 'react';

const Location = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className='relative'>
            <div
                className='absolute w-full cursor-pointer'
                onClick={() => setOpen(!open)}
                style={{ zIndex: 100 }}
            >
                <div className='flex justify-between items-center border-b-2 rounded-xl py-2 bg-white px-4'>
                    <div className='font-medium'>Location Name</div>
                    <div>
                        <Image src={images.arrow_lr} width={24} height={24} alt="arrow" />
                    </div>
                </div>
            </div>
            <div
                className={`absolute p-2 border shadow-md transition-all duration-300 ease-in-out max-h-0 overflow-hidden`}
                style={{ background: colors.gray_one, width: "calc(100% - 24px)", top: open ? "35px" : "0", left: "10px", zIndex: 10, maxHeight: open ? "200px" : "0" }}
            >
                <div className={`flex mt-2 gap-4 max-[1800px]:gap-2 items-center`}>
                    <time className='text-2xl max-[1800px]:text-xl max-[1495px]:text-sm  font-bold'>08:30 AM</time>
                    <div className='text-lg max-[1800px]:text-sm font-semibold'>Tue 20 Jan</div>
                </div>
                <div className={`flex items-center justify-between ${open ? 'visible' : 'invisible'}`}>
                    <div className='flex items-center gap-1'>
                        <Image src={images.globe} width={20} height={20} alt="world" />
                        <div className='font-medium text-sm'>UTC: +5 hours</div>
                    </div>
                    <Image src={images.expand} width={20} height={20} alt="expand" />
                </div>
            </div>
        </div>
    );
};

export default Location;
