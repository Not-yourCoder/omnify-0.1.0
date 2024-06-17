import Input from '@/components/ui/ui_customInput/Input';
import EditColumn from '@/components/editColumn/EditColumn';
import FilterModal from '@/components/filtermodal/FilterModal';
import { images } from '@/constants/images';
import { dheader } from '@/constants/menu';
import { useEditModalContext } from '@/context/EditColumnModalContext';
import { useMenuContext } from '@/context/MenuContext';
import { useModalContext } from '@/context/ModalContext';
import useWindowWidth from '@/hooks/useWindowWidth';
import Image from 'next/image';
import React from 'react';
import { PiHamburger } from "react-icons/pi";

type Props = {};

const DashboardHeader = (props: Props) => {
    const { isModalOpen, openModal } = useModalContext();
    const { selectedMenu } = useMenuContext();
    const { isEditModalOpen, openEditModal } = useEditModalContext();

    const windowWidth = useWindowWidth()

    return (
        <div>
            {windowWidth < 650 ? (<div className='flex justify-between items-center'>
                <h1 className='capitalize font-semibold text-xl'>{selectedMenu}</h1>
                <PiHamburger size={30} />
            </div>) : (<h1 className='capitalize font-semibold text-xl'>{selectedMenu}</h1>)}
            <div className='flex max-[1145px] gap-4 mt-8 mr-4'>
                {dheader.map(({ label, count }, index) => (
                    <div key={index} className='w-[30rem] flex gap-2 items-center p-3 border-2 border-gray-500/50 rounded-xl'>
                        <div className='font-semibold capitalize text-md max-[599px] text-sm'>{label}</div>
                        <div className='text-sm text-gray-500'>{count}</div>
                    </div>
                ))}
            </div>
            <div className='w-full mt-5 flex justify-between'>
                <div className='flex items-center px-4 py-2 cursor-pointer bg-gray-200/60 rounded-lg gap-1 hover:bg-gray-200/80 hover:shadow-md transition-all duration-200' onClick={openModal} aria-label="Open Filter Modal">
                    <Image src={images.filter} width={24} height={24} alt="filter_icon" />
                    {windowWidth > 600 && <div className='text-sm font-semibold'>Add Filter</div>}
                </div>
                <div className='flex items-center justify-end gap-8 mx-4'>
                    <div className='bg-gray-200/20'>
                        {windowWidth < 856 ? <div className='p-2 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer'>
                            <Image src={images.search} width={24} height={24} alt="refresh_icon" />
                        </div>
                            : <Input icon={images.search} placeholder='Search client' type="text" className='p-2 shadow-sm rounded-lg' aria-label="Search input" />}

                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='p-2 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer' aria-label="Refresh">
                            <Image src={images.refresh} width={20} height={24} alt="refresh_icon" />
                        </div>
                        <div className='p-2 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer' aria-label="Edit Columns" onClick={openEditModal}>
                            <Image src={images.column} width={20} height={24} alt="edit_columns_icon" />
                        </div>
                        <div className='p-2 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer' aria-label="Download">
                            <Image src={images.download} width={20} height={24} alt="download_icon" />
                        </div>
                    </div>
                </div>
            </div>
            {isEditModalOpen && <EditColumn />}
            {isModalOpen && <FilterModal />}
        </div>
    );
};

export default DashboardHeader;
