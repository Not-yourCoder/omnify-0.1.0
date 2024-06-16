import React from 'react'
import DashboardHeader from './DashboardHeader'
import DashboardBody from './DashboardBody'
import { SelectedColumnsProvider } from '@/context/ColumnContext'
import useWindowWidth from '@/hooks/useWindowWidth'
import { PiHamburger } from "react-icons/pi";

type Props = {}

const DashboardContent = (props: Props) => {
  const windowWidth = useWindowWidth();
  return (
    <div className='px-4 pt-8 '>
      <SelectedColumnsProvider>
        {/* {windowWidth < 856 ?
          <div className='text-4xl w-full flex justify-end hover:cursor-pointer'>
            <PiHamburger />
          </div>
          :
          <DashboardHeader />} */}
        <DashboardHeader />
        <DashboardBody />
      </SelectedColumnsProvider>
    </div>
  )
}

export default DashboardContent