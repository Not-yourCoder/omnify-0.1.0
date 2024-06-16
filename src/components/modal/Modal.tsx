import React from 'react';
import { useModalContext } from '@/context/ModalContext';

interface ModalProps {
    children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({ children }) => {
    const { isModalOpen, closeModal } = useModalContext();

    if (!isModalOpen) return null;

    return (
        <div className="inset-0 z-50">
            {children}
        </div>
    );
};

export default Modal;
