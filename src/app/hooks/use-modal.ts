import { useState } from 'react';

export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);
    const [data, setData] = useState<any>(null); // State for modal data

    const openModal = (modalData?: any) => {
        setIsOpen(true);
        setData(modalData); // Store the product data
    };
    const closeModal = () => {
        setIsOpen(false);
        setData(null); // Clear the data when the modal is closed
    };
    const toggleModal = () => setIsOpen(!isOpen);

    // Explicitly return the new 'data' property
    return { isOpen, data, openModal, closeModal, toggleModal };
};