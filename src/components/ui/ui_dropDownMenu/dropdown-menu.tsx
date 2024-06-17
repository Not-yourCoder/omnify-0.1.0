import { images } from '@/constants/images';
import useWindowWidth from '@/hooks/useWindowWidth';
import Image from 'next/image';
import React from 'react';

type Props = {
    top: string;
    menuItems: string[];
    setOpen: any;
    orders?: string | null
    setServicesLabel?: any
    setOrderLabel?: any
    type: string
};

const DropDownMenu: React.FC<Props> = ({ top, setOrderLabel, menuItems, orders, type, setOpen, setServicesLabel }) => {

    const handleDropDownMenu = (item: string, type: string) => {
        if (type === "orders") {
            setOrderLabel(item);
        }
        if (type === "services") {
            setServicesLabel(item);
        }
        setOpen(null)
    };

    const windowWidth = useWindowWidth()
    return (
        <div
            className='scrollbar transition-all duration-600 ease-in-out overflow-y-auto absolute bg-white border-2 w-[90%] max-w-[475px] max-h-[250px] mt-5 rounded-xl capitalize text-md shadow-md z-50'
            style={{ top: windowWidth > 650 ? top : "24%" }}
        >
            {
                menuItems.map((item, index) => (
                    <ul key={index} className='relative flex justify-between items-center'>
                        <li className='p-2 hover:bg-gray-200/40 flex-1 cursor-pointer' onClick={() => { handleDropDownMenu(item, type); console.log(item) }}>
                            {item}
                        </li>
                        {orders === item ?
                            <div className='absolute right-0'>
                                <Image src={images.check} width={20} height={24} alt='check_icon' />
                            </div> : ""}
                    </ul>
                ))
            }
        </div >
    );
};

export default DropDownMenu;
