
import React from 'react'

type Props = {
    label: string
    onClick?: () => void
}

const SecondaryBtn = ({ label, ...rest }: Props) => {
    return (
        <div className='px-4 py-2 rounded-md capitalize text-white max-[650px]:text-sm text-lg font-medium hover:cursor-pointer text-center' {...rest} style={{ background: "black" }}>{label}</div>
    )
}

export default SecondaryBtn