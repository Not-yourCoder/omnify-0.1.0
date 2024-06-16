"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface EditModalContextType {
    isEditModalOpen: boolean;
    openEditModal: () => void;
    closeEditModal: () => void;
}

// Context Creation
const EditModalContext = createContext<EditModalContextType | undefined>(undefined);

// Custom hook to use the modal context
export const useEditModalContext = () => {
    const context = useContext(EditModalContext);
    if (!context) {
        throw new Error('useModalContext must be used within a ModalProvider');
    }
    return context;
};

// ModalProvider component
export const EditModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isEditModalOpen, setEditModalOpen] = useState(false);

    const openEditModal = () => setEditModalOpen(true);
    const closeEditModal = () => setEditModalOpen(false);

    return (
        <EditModalContext.Provider value={{ isEditModalOpen, openEditModal, closeEditModal }}>
            {children}
        </EditModalContext.Provider>
    );
};
