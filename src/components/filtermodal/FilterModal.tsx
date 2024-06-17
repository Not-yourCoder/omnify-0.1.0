import React from 'react'
import Modal from '../modal/Modal';
import Sidebar from './fm-sidebar';
import FmBody from './fm-body';
import PrimaryBtn from '../ui/ui_buttons/primary-btn';
import SecondaryBtn from '../ui/ui_buttons/sec-btn';
import { useModalContext } from '@/context/ModalContext';
import useWindowWidth from '@/hooks/useWindowWidth';
import { CiMenuKebab } from "react-icons/ci";

type Props = {}

const FilterModal = (props: Props) => {
    const [selected, setSelected] = React.useState<number>(0);
    const { isModalOpen, closeModal } = useModalContext();
    const [open, setOpen] = React.useState<boolean>(false);
    const windowWidth = useWindowWidth();

    return (
        <Modal>
            <div className={`bg-white fixed top-[22%] grid max-h-[660px] grid-rows-12 grid-cols-12 w-[95%] max-[650px]:p-2 max-w-[760px] border border-gray-300 rounded-xl bg-background_secondary ${isModalOpen ? "fade-in" : "fade-out"}`}>
                {windowWidth < 650 ?
                    (<div className=''>
                        <CiMenuKebab size={30} className='mx-auto w-full mt-2' onClick={() => setOpen(true)} />
                    </div>) :
                    (<div className='col-span-4 row-span-10 border-r-2 h-full'>
                        <Sidebar open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />
                    </div>
                    )}
                <div className={`${windowWidth < 650 ? "col-span-12  row-span-9" : "col-span-8  row-span-10"} `}>
                    <FmBody selected={selected} />
                </div>
                <div className='col-span-12 row-span-2 border-t-2 flex justify-end gap-4 items-center px-4 py-6'>
                    <PrimaryBtn label="Reset Defaults" />
                    <SecondaryBtn label="Apply" onClick={closeModal} />
                </div>
            </div>
            {open && (
                <div className='fixed inset-0 bg-black bg-opacity-10 z-50' onClick={() => setOpen(false)}>
                    <div className='fixed top-[28%] left-[50%] transform -translate-x-1/2 bg-white border border-gray-300 rounded-xl p-2 w-[80%] max-w-[300px]'>
                        <Sidebar open={open} setOpen={setOpen} selected={selected} setSelected={setSelected} />
                    </div>
                </div>
            )}
        </Modal>
    )
}

export default FilterModal;
