import { colors } from '@/constants/colors'
import React from 'react'

type Props = {
    label: string
    onClick?: () => void
}

const PrimaryBtn = ({ label, onClick }: Props) => {
    return (
        <div onClick={onClick} className='px-4 py-2 rounded-md capitalize text-black max-[650px]:text-sm text-lg font-medium hover:cursor-pointer text-center' style={{ background: `${colors.primary_btnBg}` }}>{label}</div>
    )
}

export default PrimaryBtn