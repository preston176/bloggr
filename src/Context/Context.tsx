import React, { createContext, useContext, useState } from "react";

interface ContextProps {
    children: React.ReactNode;
}

interface BlogContextType {
    currentUser: boolean;
    setCurrentUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const blogContext = createContext<BlogContextType>({
    currentUser: false,
    setCurrentUser: () => { }
});

const Context: React.FC<ContextProps> = ({ children }: ContextProps) => {
    const [currentUser, setCurrentUser] = useState<boolean>(false);

    return (
        <blogContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </blogContext.Provider>
    );
};

export default Context;

export const useBlogContext = (): BlogContextType => useContext(blogContext);
