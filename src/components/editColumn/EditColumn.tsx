import React from 'react';
import CheckBox from '../ui/ui_checkbox/CheckBox';
import PrimaryBtn from '../buttons/primary-btn';
import SecondaryBtn from '../buttons/sec-btn';
import { useEditModalContext } from '@/context/EditColumnModalContext';
import { mockData } from '@/constants/data';
import { useSelectedColumns } from '@/context/ColumnContext';

type Props = {}

const EditColumn = (props: Props) => {
    const { closeEditModal } = useEditModalContext();
    const { selectedColumns, setSelectedColumns } = useSelectedColumns()
    const handleDynamicColumn = (column: string) => {
        const isSelected = selectedColumns.includes(column);

        if (isSelected) {
            setSelectedColumns(selectedColumns.filter(col => col !== column));
        } else {
            setSelectedColumns([...selectedColumns, column]);
        }
    };


    return (
        <div className='absolute top-[22%] right-[5%] '>
            <div className='bg-white border rounded-xl p-4 fade-in'>
                <div>
                    <div className='text-xl mb-3 font-medium'>Edit Columns</div>
                    <div>Select the columns to rearrange</div>
                </div>
                <div className='h-[400px] my-4 overflow-auto scrollbar'>
                    {mockData.headers.map((item, index) => (
                        <div key={index} className='flex items-center gap-2 mb-4'>
                            <CheckBox
                                ariaLabel='Select Table Headers to display'
                                isChecked={selectedColumns.includes(item.label)}
                                onChange={() => handleDynamicColumn(item.label)}
                            />
                            <div className='border font-medium border-gray-400/40 w-full p-2 rounded-lg'>{item.label}</div>
                        </div>
                    ))}
                </div>
                <div className='gap-2 grid grid-cols-2'>
                    <PrimaryBtn label="Reset to Default" onClick={() => setSelectedColumns(mockData.headers.map(header => header.label))} />
                    <SecondaryBtn label="Apply" onClick={closeEditModal} />
                </div>
            </div>
        </div>
    );
}

export default EditColumn;
