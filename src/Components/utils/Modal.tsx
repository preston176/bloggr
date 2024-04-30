import React, { ReactNode } from "react";

interface ModalProps {
    children: ReactNode;
    modal: boolean
    setModal: (value: boolean) => void
}

const Modal: React.FC<ModalProps> = ({ children, modal }) => {
    return (
        <div className={`bg-white/50 fixed inset-0 z-10 transition-all duration-700 ${modal ? "visible opacity-100" : "invisible opacity-0"}`}>
            {children}
        </div>
    );
};

export default Modal;
