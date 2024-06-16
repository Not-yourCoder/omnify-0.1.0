import React from 'react'

type Props = {}

const RadioButton: React.FC<{ id: string; name: string; label: string; checked: boolean; onChange: () => void; }> = ({ id, name, label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="appearance-none w-5 h-5 border border-gray-400 rounded-full checked:border border-gray-300/60 checked:bg-white relative
                after:content-[''] after:absolute after:w-[8px] after:h-[8px] after:rounded-full after:bg-white after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 checked:after:bg-black"
      />
      <span>{label}</span>
    </label>
  );
}

export default RadioButton