import React, { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
    return (
        <div className="bg-white\50 fixed inset-0 z-10">
            {children}
        </div>
    );
};

export default Modal;
