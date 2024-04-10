import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import Loading from "../Components/Loading/Loading";

interface ContextProps {
    children: React.ReactNode;
}

interface BlogContextType {
    currentUser: boolean | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const blogContext = createContext<BlogContextType>({
    currentUser: null,
    setCurrentUser: () => { }
});

const Context: React.FC<ContextProps> = ({ children }: ContextProps) => {
    const [currentUser, setCurrentUser] = useState<boolean | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(true);
            } else {
                setCurrentUser(false);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    return (
        <blogContext.Provider value={{ currentUser, setCurrentUser }}>
            {loading ? <Loading /> : children}
        </blogContext.Provider>
    );
};

export default Context;

export const useBlogContext = (): BlogContextType => useContext(blogContext);
