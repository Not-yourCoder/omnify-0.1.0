import CheckBox from '@/components/ui/ui_checkbox/CheckBox';
import { colors } from '@/constants/colors';
import { mockData } from '@/constants/data';
import Image from 'next/image';
import React from 'react';
import DashboardFooter from './DashboardFooter';
import { useSelectedColumns } from '@/context/ColumnContext';

type Props = {}

const DashboardBody: React.FC<Props> = () => {
    const { selectedColumns } = useSelectedColumns()
    const filteredHeaders = mockData.headers.filter(header => selectedColumns.includes(header.label));

    return (
        <div className='border-2 rounded-xl shadow-sm mt-8'>
            <div className="scrollbar overflow-auto h-[625px]">
                <div className="">
                    <table className="max-w-full divide-y divide-gray-200 table-fixed">
                        <thead style={{ background: colors.background_secondary }}>
                            <tr className='text-left'>
                                <th className='p-4'>
                                    <CheckBox ariaLabel="Select all mail" />
                                </th>
                                {filteredHeaders?.map((header, index) => (
                                    <th
                                        key={index}
                                        scope="col"
                                        className="p-4 text-xs text-center font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap"
                                    >
                                        <div className="flex items-center">
                                            <Image src={header.icon} alt={header.label} width={16} height={16} />
                                            <span className="ml-2">{header.label}</span>
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {mockData.body.map((row, rowIndex) => (
                                <tr key={rowIndex} className='text-sm font-medium'>
                                    <td className="p-4 whitespace-nowrap">
                                        <CheckBox ariaLabel="Select each mail" />
                                    </td>
                                    {selectedColumns.includes('Created On') && <td className="p-4 whitespace-nowrap">{row.createdOn}</td>}
                                    {selectedColumns.includes('Payer') && <td className="p-4 whitespace-nowrap">{row.payer}</td>}
                                    {selectedColumns.includes('Status') && <td className="p-4 whitespace-nowrap capitalize"><span className={`inline-flex before:w-2 before:h-2 before:mr-1 before:rounded-full items-center px-2.5 py-1 rounded-full text-sm font-medium ${getStatusStyles(row.status)}`}>{row.status}</span></td>}
                                    {selectedColumns.includes('Email') && <td className="p-4 whitespace-nowrap">{row.email}</td>}
                                    {selectedColumns.includes('Payer Phone') && <td className="p-4 whitespace-nowrap">{row.phone}</td>}
                                    {selectedColumns.includes('Services') && <td className="p-4 whitespace-nowrap">{row.services}</td>}
                                    {selectedColumns.includes('Scheduled') && <td className="p-4 whitespace-nowrap">{row.scheduled}</td>}
                                    {selectedColumns.includes('Amount') && <td className="p-4 whitespace-nowrap">{row.amount}</td>}
                                    {selectedColumns.includes('Transaction ID') && <td className="p-4 whitespace-nowrap">{row.transactionId}</td>}
                                    {selectedColumns.includes('Due Date') && <td className="p-4 whitespace-nowrap">{row.dueDate}</td>}
                                    {selectedColumns.includes('Address') && <td className="p-4 whitespace-nowrap">{row.address}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <DashboardFooter />
        </div>
    );
};

export default DashboardBody

const getStatusStyles = (status: string) => {
    switch (status) {
        case 'lead':
            return 'bg-blue-100 text-blue-800 before:bg-blue-800';
        case 'active':
            return 'bg-green-100 text-green-800 before:bg-green-800';
        case 'inactive':
            return 'bg-gray-100 text-gray-800 before:bg-gray-800';
        default:
            return 'bg-gray-100 text-gray-800 before:bg-gray-800';
    }
};
