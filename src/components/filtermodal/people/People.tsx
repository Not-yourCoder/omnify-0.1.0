// src/components/People/People.tsx
import React from 'react';
import SearchComponent from '../../ui/ui_search/Search';
import { images } from '@/constants/images';
import CheckBox from '@/components/ui/ui_checkbox/CheckBox';
import { people } from '@/constants/menu';
import { usePeopleContext } from '@/context/SelectedPeopleContext';

const People: React.FC = () => {
  const { selectedPeople, selectedPeopleArray, handlePersonSelect } = usePeopleContext();
  const typeOfSearch = "people";

  return (
    <>
      <SearchComponent
        items={people}
        placeholder="Search Payer or attendee name"
        icon={images.search}
        selectedPeople={selectedPeople}
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
        </div>
      ))}
    </>
  );
};

export default People;
