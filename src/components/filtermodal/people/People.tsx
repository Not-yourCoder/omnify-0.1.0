"use client"
import React, { useState } from 'react';
import SearchComponent from '../../ui/ui_search/Search';
import { Person, people } from '@/constants/menu';
import { images } from '@/constants/images';
import CheckBox from '@/components/ui/ui_checkbox/CheckBox';

const People = () => {
  const typeOfSearch = "people"
  const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

  const handlePersonSelect = (name: string, isSelected: boolean) => {
    if (isSelected) {
      setSelectedPeople(prevSelected => [...prevSelected, name]);
    } else {
      setSelectedPeople(prevSelected => prevSelected.filter(person => person !== name));
    }
  };
  const selectedPeopleArray = people.filter(person =>
    selectedPeople.includes(person.name)
  );
  console.log(selectedPeopleArray);
  return (
    <>
      <SearchComponent
        items={people}
        placeholder="Search Payer or attendee name"
        icon={images.search}
        selectedPeople={selectedPeople}
        setSelectedPeople={setSelectedPeople}
        handlePersonSelect={handlePersonSelect}
        typeOfSearch={typeOfSearch}
      />
      {selectedPeopleArray?.map((item, index) => (
        <div key={index} className='mx-4 mb-2'>
          <div className='flex gap-2 items-center text-md font-medium'>
            <CheckBox ariaLabel='Selected People' isChecked={true} />
            <div>{item?.name}</div>
            <div className='text-xs bg-gray-300/40 px-[10px] rounded-full'>{item?.type}</div>
          </div>
        </div>))}
    </>
  );
};

export default People;
