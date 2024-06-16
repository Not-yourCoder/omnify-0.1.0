"use client"
import { images } from '@/constants/images';
import Image from 'next/image';
import React from 'react';
import LogoContainer from './logoContainer';
import Location from '@/widgets/locationWidget';
import DashboardMenu from './ds-menu';
import { colors } from '@/constants/colors';
import DsAccount from './ds-account';

type Props = {}

const DashboardSidebar = (props: Props) => {
    return (
        <div className='px-2 transition-all duration-300 ease-in-out' style={{ background: colors.background_secondary }}>
            <LogoContainer />
            <Location />
            <DashboardMenu />
            <div className='flex items-center justify-between p-2 mt-[300px]'>
                <div className='flex items-center gap-2'>
                    <Image src={images.layout} width={24} height={24} alt="icon" />
                    <div className='font-medium' style={{ color: colors.text_color }}>Dashboard</div>
                </div>
                <div>
                    <Image src={images.redirect} width={24} height={24} alt='icon' />
                </div>
            </div>
            <DsAccount />
        </div>
    );
}

export default DashboardSidebar;
