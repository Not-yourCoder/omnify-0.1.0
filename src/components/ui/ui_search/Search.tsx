"use client"

import React, { ChangeEvent, useState, useMemo } from 'react';
import Input from '../ui_customInput/Input';
import CheckBox from '../ui_checkbox/CheckBox';
import { CompanyEntity } from '@/constants/services';
import { Person } from '@/constants/menu';

interface SearchComponentProps {
    items: CompanyEntity[] | Person[];
    placeholder: string;
    icon: string;
    selectedPeople?: string[];
    typeOfSearch: 'people' | 'services';
    setSelectedPeople?: React.Dispatch<React.SetStateAction<string[]>>;
    handlePersonSelect?: (name: string, isSelected: boolean) => void;
    selectedServices?: string[];
    setSelectedService?: React.Dispatch<React.SetStateAction<string[]>>;
    handleServiceSelect?: (name: string, isSelected: boolean) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
    items,
    placeholder,
    icon,
    typeOfSearch,
    selectedPeople,
    handlePersonSelect,
    setSelectedPeople,
    selectedServices,
    setSelectedService,
    handleServiceSelect
}) => {
    const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleChange = (isChecked: boolean, name: string) => {
        if (handleServiceSelect && typeOfSearch === 'services') {
            handleServiceSelect(name, isChecked);
        }
        if (handlePersonSelect && typeOfSearch === 'people') {
            handlePersonSelect(name, isChecked);
        }
    };

    const filteredItems = useMemo(() => {
        if (!searchTerm) {
            return items;
        }
        return items.filter(item =>
            item.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);

    return (
        <div className="flex flex-col items-center p-4">
            <label htmlFor="searchInput" className="sr-only">Search</label>
            <Input
                id="searchInput"
                icon={icon}
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder={placeholder}
                className="p-2 outline-none w-full"
                aria-label="Search input"
            />
            {searchTerm && (
                <>
                    <div className='flex justify-start my-4 text-xl w-full '>
                        {filteredItems.length > 0
                            ? `Showing ${filteredItems.length} results for "${searchTerm}"`
                            : `No results found for "${searchTerm}"`}
                    </div>
                    <div className="w-full p-4 max-h-[225px] overflow-y-auto list-none">
                        {filteredItems.map((item, index) => (
                            <div key={index} className='flex items-center justify-between gap-10'>
                                <div className='flex gap-2 items-center'>
                                    <CheckBox
                                        ariaLabel={`Select ${item.name}`}
                                        isChecked={typeOfSearch === 'people' ? selectedPeople?.includes(item.name) : selectedServices?.includes(item.name)}
                                        onChange={(isChecked) => handleChange(isChecked, item.name)}
                                    />
                                    <div className="p-1">
                                        {item.name}
                                    </div>
                                </div>
                                <div className='flex gap-2 font-medium'>
                                    <div className='text-xs bg-gray-200/40 px-2 py-1 rounded'>
                                        {item.type}
                                    </div>
                                    {'visibility' in item && (
                                        <div className={`text-xs ${item.visibility === "Private" ? "text-red-700" : "text-green-700"} px-2 py-1 rounded`}>
                                            {item.visibility}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchComponent;
