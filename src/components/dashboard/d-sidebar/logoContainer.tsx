import { images } from '@/constants/images';
import { useAppContext } from '@/context/AppContext';
import useWindowWidth from '@/hooks/useWindowWidth';
import Image from 'next/image';
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';

type Props = {
    setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
const LogoContainer = ({ setOpenSidebar }: Props) => {
    const { toggleExpand } = useAppContext();
    const windowWidth = useWindowWidth();

    const handleToggleExpand = () => {
        toggleExpand();
    };



    return (
        <div className='px-2 py-8 text-black'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-4 max-[650px]:gap-2'>
                    <Image src={images.logo} width={30} height={30} alt="logo" />
                    <div className='text-2xl max-[1600px]:text-xl font-bold flex items-center gap-1'>
                        Front
                        <div className='bg-black w-[6px] h-[6px] rounded'></div>
                        Desk
                    </div>
                </div>
                {windowWidth > 650 ? (
                    <div onClick={handleToggleExpand}>
                        <Image src={images.frame} width={24} height={24} alt="toggle_sidebar" />
                    </div>
                ) : (
                    <div onClick={() => setOpenSidebar(false)}>
                        <IoCloseOutline size={30} />
                    </div>

                )}
            </div>
        </div>
    );
};

export default LogoContainer;
