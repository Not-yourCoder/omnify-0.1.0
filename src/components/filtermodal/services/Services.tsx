import React from 'react';
import Dropdown from '@/components/ui/ui-dropdown/dropdown';
import { companyEntities, serviceNames } from '@/constants/services';
import RadioButton from '@/components/ui/ui_radio/radio';
import SearchComponent from '@/components/ui/ui_search/Search';
import { images } from '@/constants/images';
import DropDownMenu from '@/components/ui/ui_dropDownMenu/dropdown-menu';
import { useServiceContext } from '@/context/DDServicesContext';
import CheckBox from '@/components/ui/ui_checkbox/CheckBox';

type Props = {}

const Services: React.FC<Props> = () => {
    const [open, setOpen] = React.useState<number | null>(null);
    const [searchOption, setSearchOption] = React.useState<string>('name');
    const [selectedServices, setselectedService] = React.useState<string[]>([])

    const { type } = useServiceContext()
    const typeOfSearch = "services"
    const handleDropdown = (index: number) => {
        setOpen(open === index ? null : index);
    }

    const handleServiceSelect = (name: string, isSelected: boolean) => {
        if (isSelected) {
            setselectedService(prevSelected => [...prevSelected, name]);
        } else {
            setselectedService(prevSelected => prevSelected.filter(service => service !== name));
        }
    };
    const service = [
        { label: "Service type", placeholder: "Select service type" },
        { label: "Status", placeholder: "Select status" }
    ];

    const selectedServiceArray = companyEntities.filter((service) => selectedServices.includes(service.name))

    const serviceStatus = ["active", "lead", "inactive"];
    const { setServicesLabel } = useServiceContext()
    return (
        <div>
            <div className='flex items-center justify-between mb-4 mx-4'>
                <div className='flex items-center gap-2'>
                    <RadioButton
                        id="searchByName"
                        name="searchOption"
                        label="Search by name"
                        checked={searchOption === 'name'}
                        onChange={() => setSearchOption('name')}
                    />
                </div>
                <div className='flex items-center gap-2'>
                    <RadioButton
                        id="searchByTag"
                        name="searchOption"
                        label="Search by tags"
                        checked={searchOption === 'tags'}
                        onChange={() => setSearchOption('tags')}
                    />
                </div>
            </div>
            {searchOption === "name" ? (
                <SearchComponent items={companyEntities} icon={images.search} placeholder='Search service name' setSelectedService={setselectedService} selectedServices={selectedServices} handleServiceSelect={handleServiceSelect} typeOfSearch={typeOfSearch} />
            ) : (
                service.map(({ label, placeholder }, index) => (
                    <div key={index} className="mb-4">
                        <Dropdown
                            label={label}
                            placeholder={placeholder}
                            open={open === index}
                            handleDropdown={() => handleDropdown(index)}
                            type={type}
                        />
                        {open === index && (
                            <DropDownMenu
                                menuItems={index === 0 ? serviceNames : serviceStatus}
                                top={index === 0 ? "24%" : "47%"}
                                setOpen={setOpen}
                                setServicesLabel={setServicesLabel}
                                type={type}
                            />
                        )}
                    </div>
                ))
            )}
            {searchOption === 'name' && selectedServiceArray?.map((item, index) => (
                <div key={index} className='mx-4 mb-2'>
                    <div className='flex gap-2 items-center text-md font-medium'>
                        <CheckBox ariaLabel='Selected People' isChecked={true} />
                        <div>{item?.name}</div>
                        <div className='text-xs bg-gray-300/40 px-[10px] rounded-full'>{item?.type}</div>
                        <div className='text-xs bg-gray-300/40 px-[10px] rounded-full'>{item?.visibility}</div>
                    </div>
                </div>))}
        </div>
    );
}

export default Services;
