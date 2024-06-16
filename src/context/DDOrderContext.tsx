"use client"
//this context is used for the dropdowns on the Schedule date ( orders )

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface DdOrderContextProps {
    orders: string | undefined | null;
    setOrderLabel: (label: string) => void;
    type: string
}

const DdOrderContext = createContext<DdOrderContextProps | undefined>(undefined);

export const DropdownProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [orders, setOrders] = useState<string | null>(null);

    const setOrderLabel = (label: string) => {
        setOrders(label);
    };
    const type = "orders"

    return (
        <DdOrderContext.Provider value={{ orders, setOrderLabel, type }}>
            {children}
        </DdOrderContext.Provider>
    );
};

export const useOrderContext = () => {
    const context = useContext(DdOrderContext);
    if (!context) {
        throw new Error('useDropdown must be used within a DropdownProvider');
    }
    return context;
};
