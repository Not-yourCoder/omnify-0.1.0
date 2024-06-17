import DashboardContent from '@/components/dashboard/d-content/DashboardContent';
import DashboardSidebar from '@/components/dashboard/d-sidebar/DashboardSidebar';
import SidebarCompressed from '@/components/dashboard/d-sidebar/ds-compress';
import { useAppContext } from '@/context/AppContext';
import useWindowWidth from '@/hooks/useWindowWidth';
import React from 'react';

const Dashboard = () => {
    const { expand } = useAppContext();
    const windowWidth = useWindowWidth();

    return (
        <div className='flex'>
            {windowWidth < 1550 ? (
                <div className='grid grid-cols-12'>
                    {windowWidth > 650 && (
                        <div className='col-span-1'>
                            <SidebarCompressed />
                        </div>

                    )}
                    <div className={`${windowWidth > 650 ? "col-span-11" : "col-span-12"}`}>
                        <DashboardContent />
                    </div>
                </div>
            ) : (
                <>
                    <div className={`transition-width duration-300 ease-in-out ${expand ? 'w-1/6' : 'w-[5%]'}`}>
                        {expand ? <DashboardSidebar setOpenSidebar={function (value: React.SetStateAction<boolean>): void {
                                throw new Error('Function not implemented.');
                            } } /> : <SidebarCompressed />}
                    </div>
                    <div className={`transition-width duration-300 ease-in-out ${expand ? 'w-5/6' : 'w-[95%]'}`}>
                        <DashboardContent />
                    </div>

                </>
            )}

        </div>
    );
};

export default Dashboard;
