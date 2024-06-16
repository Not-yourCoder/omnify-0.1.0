import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockData } from '@/constants/data';

interface SelectedColumnsContextType {
    selectedColumns: string[];
    setSelectedColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

const SelectedColumnsContext = createContext<SelectedColumnsContextType | undefined>(undefined);

export const useSelectedColumns = (): SelectedColumnsContextType => {
    const context = useContext(SelectedColumnsContext);
    if (!context) {
        throw new Error('useSelectedColumns must be used within a SelectedColumnsProvider');
    }
    return context;
};

interface SelectedColumnsProviderProps {
    children: ReactNode;
}

export const SelectedColumnsProvider = ({ children }: SelectedColumnsProviderProps) => {
    const [selectedColumns, setSelectedColumns] = useState<string[]>(mockData.headers.map(header => header.label));

    return (
        <SelectedColumnsContext.Provider value={{ selectedColumns, setSelectedColumns }}>
            {children}
        </SelectedColumnsContext.Provider>
    );
};
