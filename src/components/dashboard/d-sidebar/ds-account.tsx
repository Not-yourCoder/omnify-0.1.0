import { colors } from '@/constants/colors';
import { images } from '@/constants/images';
import useWindowWidth from '@/hooks/useWindowWidth';
import Image from 'next/image';
import React from 'react';

type Props = {};

const DsAccount: React.FC<Props> = (props: Props) => {
    const windowWidth = useWindowWidth()
    return (
        <>
            <div className='flex bg-white items-center  justify-around border-b-2 py-4 rounded-xl mt-4'>
                <Image className='max-[1620px]:hidden' src={images.profileImage} width={26} height={26} alt="profile_image" />
                <div>
                    <div className='font-medium' style={{ color: colors.text_color }}>
                        Admin name
                    </div>
                    <div style={{ color: colors.textSecondary }}>
                        <span aria-label="Admin Email" style={{ width: windowWidth < 1600 ? "100px" : "100%", display: 'block', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            adminname@mail.com
                        </span>
                    </div>
                </div>
                <Image src={images.expand} width={26} height={26} alt='Expand' />
            </div>
            <div className='flex gap-2 p-2'>
                <Image src={images.help} width={24} height={24} alt='help_icon' />
                <div className=''>
                    <div className='font-medium' style={{ color: colors.text_color }}>
                        Help center
                    </div>
                    <div className='' style={{ color: colors.textSecondary }}>
                        <span aria-label="Copyright" style={{ display: 'block', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                            @2024 Omnify.Inc
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DsAccount;
