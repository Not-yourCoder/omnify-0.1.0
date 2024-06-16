import React from 'react'
import Modal from '../modal/Modal'
import { useMenuContext } from '@/context/MenuContext'
import Sidebar from './fm-sidebar'
import FmBody from './fm-body'
import PrimaryBtn from '../buttons/primary-btn'
import SecondaryBtn from '../buttons/sec-btn'
import { useModalContext } from '@/context/ModalContext'

type Props = {}

const FilterModal = (props: Props) => {
    const [selected, setSelected] = React.useState<number>(0);
    const { isModalOpen, closeModal } = useModalContext()
    
    return (
        <Modal>
            <div className={`bg-white fixed top-[22%] grid grid-rows-12 grid-cols-12 w-[760px] border border-gray-300 rounded-xl bg-background_secondary ${isModalOpen ? "fade-in" : "fade-out"}`}
            >
                <div className='col-span-4 row-span-10 border-r-2 h-full'>
                    <Sidebar selected={selected} setSelected={setSelected} />
                </div>
                <div className='col-span-8 row-span-10'>
                    <FmBody selected={selected} />
                </div>
                <div className='col-span-12 row-span-2 border-t-2 flex justify-end gap-4 items-center px-4 py-6'>
                    <PrimaryBtn label="Reset Defaults" />
                    <SecondaryBtn label="Apply" onClick={closeModal} />
                </div>
            </div>
        </Modal>
    )
}

export default FilterModal