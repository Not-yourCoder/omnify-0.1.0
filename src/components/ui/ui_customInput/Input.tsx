// components/CustomInput.js
import Image from 'next/image';
import React from 'react';

interface Props {
    id?: string
    icon?: string
    type: string
    name?: string
    value?: any
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    className?: string
    styles?: React.CSSProperties
    onClick?: () => void
    readOnly?: boolean
}

const Input = ({ icon, styles, className, ...rest }: Props) => {
    return (
        <div className={`flex items-center border-2 focus:outline-4 rounded-xl bg-gray-200/10 ${className}`} style={styles}>
            {icon && <Image src={icon} width={24} height={24} alt="icon" />}
            <input {...rest} className="outline-none ml-2 placeholder:text-lg placeholder:text-gray-500 bg-gray-200/20 w-full h-full" />
        </div>
    );
};

export default Input;
