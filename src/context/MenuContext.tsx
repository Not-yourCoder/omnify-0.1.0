"use client"
//context for selected menu from the sidebar

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface MenuContextType {
    selectedMenu: string;
    setSelectedMenu: (menuItem: string) => void;
}

interface MenuProviderProps {
    children: ReactNode;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error('useMenuContext must be used within a MenuProvider');
    }
    return context;
};

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }: MenuProviderProps) => {
    const [selectedMenu, setSelectedMenu] = useState<string>('Dashboard');

    return (
        <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
