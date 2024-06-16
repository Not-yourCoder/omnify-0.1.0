//this context is used for the services / products

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DropdownContextProps {
    services: string | null;
    setServicesLabel: (label: string) => void;
    type: string
}

const DdServicesContext = createContext<DropdownContextProps | undefined>(undefined);

export const ServicesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [services, setServices] = useState<string | null>(null);

    const setServicesLabel = (label: string) => {
        setServices(label);
    };
    const type = "services"

    return (
        <DdServicesContext.Provider value={{ services, setServicesLabel, type }}>
            {children}
        </DdServicesContext.Provider>
    );
};

export const useServiceContext = () => {
    const context = useContext(DdServicesContext);
    if (!context) {
        throw new Error('useDropdown must be used within a DropdownProvider');
    }
    return context;
};
