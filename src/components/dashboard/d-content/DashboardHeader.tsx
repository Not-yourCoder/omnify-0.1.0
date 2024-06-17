import React from 'react';
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
import { PiHamburger } from "react-icons/pi";
import DashboardSidebar from '../d-sidebar/DashboardSidebar';
import { usePeopleContext } from '@/context/SelectedPeopleContext';
import { IoCloseOutline } from 'react-icons/io5';

const DashboardHeader: React.FC = () => {
    const { isModalOpen, openModal } = useModalContext();
    const { selectedMenu } = useMenuContext();
    const [openSidebar, setOpenSidebar] = React.useState<boolean>(false)
    const { isEditModalOpen, openEditModal } = useEditModalContext();
    const windowWidth = useWindowWidth();

    //selected people context 
    const { selectedPeople, removePerson } = usePeopleContext();
    return (
        <div className='text-[#475569]'>
            <div className='flex justify-between items-center'>
                <h1 className='capitalize font-semibold text-xl'>{selectedMenu}</h1>
                {windowWidth < 650 && <PiHamburger onClick={() => setOpenSidebar(true)} size={30} />}
                <div className={`fixed bg-white border-l z-[999] shadow-md text-xl transform w-72 ${openSidebar ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out font-semibold h-screen top-0 p-2 right-0`}>
                    <DashboardSidebar setOpenSidebar={setOpenSidebar} />
                </div>
            </div>
            <div className='flex max-[1145px] gap-4 mt-8 mr-4'>
                {dheader.map(({ label, count }, index) => (
                    <div key={index} className='w-[30rem] flex gap-2 items-center p-3 border-2 border-gray-500/50 rounded-xl'>
                        <div className='font-semibold capitalize text-md max-[599px] text-sm'>{label}</div>
                        <div className='text-sm text-gray-500'>{count}</div>
                    </div>
                ))}
            </div>
            <div className='w-full mt-5 flex justify-between'>
                {windowWidth > 750 ? <div className='max-[712px]:bg-red-700 flex gap-2 items-center'>
                    <div className='flex items-center px-4 py-2 cursor-pointer w-[128px] bg-gray-200/60 rounded-lg gap-1 hover:bg-gray-200/80 hover:shadow-md transition-all duration-200' onClick={openModal} aria-label="Open Filter Modal">
                        <Image src={images.filter} width={24} height={24} alt="filter_icon" />
                        {windowWidth > 600 && <div className='text-sm font-semibold'>Add Filter</div>}
                    </div>
                    {/* tags showing selected people */}
                    <div className='flex max-[920px]:hidden items-center gap-2 max-w-[920px] scrollbar overflow-auto'>
                        {windowWidth > 920 && selectedPeople?.map((people, index) => (
                            <div key={index} className='bg-gray-200/50 rounded-md py-1 px-2 flex justify-between items-center gap-2'>
                                <div className='text-gray-600 text-sm font-medium'>
                                    {people}
                                </div>
                                <div className='bg-gray-200 p-1 hover:cursor-pointer' onClick={() => removePerson(people)}>
                                    <IoCloseOutline size={20} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div> : <div className='flex items-center px-4 py-2 cursor-pointer bg-gray-200/60 rounded-lg gap-1 hover:bg-gray-200/80 hover:shadow-md transition-all duration-200' onClick={openModal} aria-label="Open Filter Modal">
                    <Image src={images.filter} width={24} height={24} alt="filter_icon" />
                    {windowWidth > 600 && <div className='text-sm font-semibold'>Add Filter</div>}
                </div>}

                <div className='flex items-center justify-end gap-8 mx-4'>
                    <div className='bg-gray-200/20'>
                        {windowWidth < 856 ? (
                            <div className='p-2 border border-white hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer'>
                                <Image src={images.search} width={24} height={24} alt="refresh_icon" />
                            </div>
                        ) : (
                            <Input icon={images.search} placeholder='Search client' type="text" className='p-2 shadow-sm rounded-lg' aria-label="Search input" />
                        )}
                    </div>
                    <div className='flex items-center gap-8'>
                        <div className='p-2 border border-white w-10 hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer' aria-label="Refresh">
                            <Image src={images.refresh} width={20} height={24} alt="refresh_icon" />
                        </div>
                        <div className='p-2 border border-white w-10 hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer' aria-label="Edit Columns" onClick={openEditModal}>
                            <Image src={images.column} width={20} height={24} alt="edit_columns_icon" />
                        </div>
                        <div className='p-2 border border-white w-10 hover:border-gray-300 hover:shadow-sm hover:bg-gray-300/10 hover:scale-105 transition-all duration-200 ease-in-out rounded-lg hover:cursor-pointer' aria-label="Download">
                            <Image src={images.download} width={20} height={24} alt="download_icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 w-full mt-2 overflow-auto'>
                {windowWidth < 920 && selectedPeople?.map((people, index) => (
                    <div key={index} className='bg-gray-200/50 rounded-md py-1 px-2 flex justify-between items-center gap-2'>
                        <div className='text-gray-600 text-sm font-medium'>
                            {people}
                        </div>
                        <div className='bg-gray-200 p-1 hover:cursor-pointer' onClick={() => removePerson(people)}>
                            <IoCloseOutline size={20} />
                        </div>
                    </div>
                ))}
            </div>
            {isEditModalOpen && <EditColumn />}
            {isModalOpen && <FilterModal />}
        </div>
    );
};

export default DashboardHeader;
