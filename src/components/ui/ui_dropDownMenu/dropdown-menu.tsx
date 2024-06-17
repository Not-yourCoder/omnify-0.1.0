import { images } from '@/constants/images';
import useWindowWidth from '@/hooks/useWindowWidth';
import Image from 'next/image';
import React from 'react';

type Props = {
    top: string;
    menuItems: string[];
    setOpen: any;
    orders?: string | null
    services?: string | null
    setServicesLabel?: any
    setOrderLabel?: any
    setStatusLabel?: any
    type: string
};

const DropDownMenu: React.FC<Props> = ({ top, services, setOrderLabel, setStatusLabel, menuItems, orders, type, setOpen, setServicesLabel }) => {

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

    // Adjust top position based on window width
    const calculateTopPosition = () => {
        if (windowWidth > 650) {
            return top; // Use the provided top value for larger screens
        } else {
            // Adjust the top position for smaller screens
            return `calc(${top} + 7vh)`;
        }
    };

    return (
        <div
            className='scrollbar transition-all duration-600 ease-in-out overflow-y-auto absolute bg-white border-2 w-[100%] max-w-[470px] max-h-[250px] rounded-xl capitalize text-md shadow-md z-50'
            style={{ top: calculateTopPosition() }}
        >
            {
                menuItems?.map((item, index) => (
                    <ul key={index} className='relative flex justify-between items-center'>
                        <li className='p-2 hover:bg-gray-200/40 flex-1 cursor-pointer' onClick={() => { handleDropDownMenu(item, type); console.log(item) }}>
                            {item}
                        </li>
                        {orders === item &&
                            <div className='absolute right-0'>
                                <Image src={images.check} width={20} height={24} alt='check_icon' />
                            </div>
                        }
                        {services === item &&
                            <div className='absolute right-0'>
                                <Image src={images.check} width={20} height={24} alt='check_icon' />
                            </div>
                        }
                    </ul>
                ))
            }
        </div>
    );
};

export default DropDownMenu;
