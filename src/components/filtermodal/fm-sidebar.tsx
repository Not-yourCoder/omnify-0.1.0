"use client";
import { colors } from '@/constants/colors';
import { sidebar } from '@/constants/menu';
import Image from 'next/image';
import React, { SetStateAction } from 'react';

interface SidebarProps {
    selected: number,
    setSelected: (index: number) => void
    open?: boolean
    setOpen?: React.Dispatch<SetStateAction<boolean>>
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, selected, setSelected }) => {

    const handleClick = (item: string, index: number) => {
        setSelected(index);
    };
    console.log(open);

    return (
        <div className='p-3 h-full bg-gray-100/50'>
            {
                sidebar.map((item, index) => (
                    <div
                        style={{ background: selected === index ? `${colors.gray_primary}` : "" }}
                        className='mb-2 rounded-lg flex justify-between capitalize p-2 items-center font-medium cursor-pointer'
                        onClick={() => handleClick(item.label, index)}
                        key={index}
                    >
                        <div className='flex items-center gap-2'>
                            <Image className='text-white' src={item.icon} width={22} height={22} alt="icon" />
                            <div className='text-md'>{item.label}</div>
                        </div>
                        {item.label === "schedule date" && <div>1</div>}
                    </div>
                ))}
        </div>
    );
};

export default Sidebar;
