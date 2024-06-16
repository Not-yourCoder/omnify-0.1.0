
"use client"
//context for sidebar expand 
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextProps {
    expand: boolean;
    toggleExpand: () => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [expand, setExpand] = useState<boolean>(true);

    const toggleExpand = () => {
        setExpand(prevExpand => !prevExpand);
    };

    return (
        <AppContext.Provider value={{ expand, toggleExpand }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
