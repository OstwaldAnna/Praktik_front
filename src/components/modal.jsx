import React from 'react';
import { CircleX } from 'lucide-react';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition duration-200">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
                    <CircleX color="#2563EB" size={25}/>
                </button>
                {children}
            </div>
        </div>

    );
};

export default Modal;
