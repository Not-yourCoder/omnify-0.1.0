import { colors } from '@/constants/colors'
import { images } from '@/constants/images'
import { dashboardMenu } from '@/constants/menu'
import { useMenuContext } from '@/context/MenuContext'
import Image from 'next/image'
import React from 'react'

type Props = {}

const DashboardMenu = (props: Props) => {
    const { selectedMenu, setSelectedMenu } = useMenuContext(); // Get setSelectedMenu from context

    const handleMenuItemClick = (menuItem: string) => {
        setSelectedMenu(menuItem); // Update selected menu item
    };
    return (
        <div className='mt-[125px] flex flex-col py-2 rounded-xl' style={{ color: colors.text_color }}>
            {dashboardMenu.map((item, index) => (
                <div key={index} className={`flex items-center gap-2 rounded-xl cursor-pointer p-3 border-b-2 ${selectedMenu === item.label ? ' border-gray-500/10 bg-white' : ' border-transparent'}`} onClick={() => handleMenuItemClick(item.label)}>
                    <Image src={item.icon} width={26} height={26} alt="icon" />
                    <div className='capitalize font-medium'>{item.label}</div>
                </div>
            ))}
        </div>
    )
}

export default DashboardMenu