import React from 'react';

type CheckBoxProps = {
    ariaLabel: string;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({ ariaLabel, isChecked, onChange }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.checked);
        }
    };

    return (
        <input
            type="checkbox"
            className='custom-checkbox'
            aria-label={ariaLabel}
            checked={isChecked}
            onChange={handleChange}
        />
    );
};

export default CheckBox;
