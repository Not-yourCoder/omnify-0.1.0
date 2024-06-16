"use client"

import { images } from '@/constants/images';
import Image from 'next/image';
import React, { useEffect } from 'react';

type Props = {
    label?: string;
    placeholder: string;
    handleDropdown?: () => void;
    open: boolean | number | null;
    orders?: string | undefined | null;
    services?: string;
    type: string;
};

const Dropdown: React.FC<Props> = ({ label, handleDropdown, open, placeholder, type, orders, services }) => {
    const [dlabel, setDlabel] = React.useState<string>(placeholder);

    useEffect(() => {
        console.log("DropDown Component ");
        console.log('Type:', type);
        console.log('Orders:', orders);
        console.log('Services:', services);

        if (type === "services" && services) {
            setDlabel(services);
        }
        if (type === "orders" && orders) {
            setDlabel(orders);
        }
    }, [orders, services, type]);

    return (
        <div className='mb-8'>
            {label && <div className='font-medium'>{label}</div>}
            <div onClick={handleDropdown} className='relative flex items-center justify-between p-3 border border-gray-300 rounded-lg my-2'>
                <div className='text-lg font-normal capitalize'>{dlabel}</div>
                <div className={`${open ? 'rotate-180' : 'rotate-0'} transition-all duration-200`}>
                    <Image src={images.expand} width={24} height={24} alt="expand_icon" />
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
