"use client"
import Input from '@/components/customInput/Input';
import Dropdown from '@/components/ui/ui-dropdown/dropdown';
import { images } from '@/constants/images';
import { dropdownMenu } from '@/constants/menu';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Calendar from '@/widgets/Calender';
import DropDownMenu from '@/components/ui/ui_dropDownMenu/dropdown-menu';
import { useOrderContext } from '@/context/DDOrderContext';

type Props = {}

const ScheduledDate: React.FC<Props> = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [openDateFrom, setOpenDateFrom] = useState<boolean>(false);
    const [openDateTo, setOpenDateTo] = useState<boolean>(false);
    const [dateFrom, setDateFrom] = useState<number | null>(null);
    const [dateTo, setDateTo] = useState<number | null>(null);

    const { orders, setOrderLabel } = useOrderContext()


    const handleDropdown = () => {
        setOpen(!open);
    }

    const { type } = useOrderContext()


    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (!target.closest('.calendar-container')) {
            setOpenDateFrom(false);
            setOpenDateTo(false);
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, []);

    return (
        <>
            <Dropdown label="Show orders for" handleDropdown={handleDropdown} open={open} placeholder='All time' orders={orders} type={type} />
            {open && <DropDownMenu menuItems={dropdownMenu} top="15%" setOpen={setOpen} orders={orders} setOrderLabel={setOrderLabel} type={type} />}
            <div className='flex items-center gap-6'>
                <div className='relative calendar-container'>
                    <div className='font-medium'>
                        From
                    </div>
                    <div className='flex p-3 border rounded-xl mt-2 bg-gray-200/40' onClick={() => setOpenDateFrom(!openDateFrom)}>
                        <div>
                            <Image src={images.calender} width={24} height={24} alt="calendar_icon" />
                        </div>
                        <Input type='text' readOnly placeholder='Pick a date' className='border-none' value={dateFrom} />
                        {openDateFrom && <Calendar setDate={setDateFrom} />}
                    </div>
                </div>
                <div className='relative calendar-container'>
                    <div className='font-medium'>
                        To
                    </div>
                    <div className='flex p-3 border rounded-xl bg-gray-200/40 mt-2' onClick={() => setOpenDateTo(!openDateTo)}>
                        <div>
                            <Image src={images.calender} width={24} height={24} alt="calendar_icon" />
                        </div>
                        <Input type='text' readOnly placeholder='Pick a date' className='border-none' value={dateTo} />
                        {openDateTo && <Calendar setDate={setDateTo} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScheduledDate;
