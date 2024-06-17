// src/context/PeopleContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Person, people } from '@/constants/menu';

interface PeopleContextProps {
    selectedPeople: string[];
    selectedPeopleArray: Person[];
    handlePersonSelect: (name: string, isSelected: boolean) => void;
    removePerson: (name: string) => void; // Add this line
}

const PeopleContext = createContext<PeopleContextProps | undefined>(undefined);

export const PeopleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [selectedPeople, setSelectedPeople] = useState<string[]>([]);

    const handlePersonSelect = (name: string, isSelected: boolean) => {
        if (isSelected) {
            setSelectedPeople(prevSelected => [...prevSelected, name]);
        } else {
            setSelectedPeople(prevSelected => prevSelected.filter(person => person !== name));
        }
    };

    const removePerson = (name: string) => { // Add this function
        setSelectedPeople(prevSelected => prevSelected.filter(person => person !== name));
    };

    const selectedPeopleArray = people.filter(person =>
        selectedPeople.includes(person.name)
    );

    return (
        <PeopleContext.Provider value={{ selectedPeople, selectedPeopleArray, handlePersonSelect, removePerson }}>
            {children}
        </PeopleContext.Provider>
    );
};

export const usePeopleContext = () => {
    const context = useContext(PeopleContext);
    if (!context) {
        throw new Error("usePeopleContext must be used within a PeopleProvider");
    }
    return context;
};
