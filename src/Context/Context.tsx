import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import Loading from "../Components/Loading/Loading";
import firebase from "firebase/compat/app";

interface ContextProps {
    children: React.ReactNode;
}

interface BlogContextType {
    currentUser: firebase.User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
}

const blogContext = createContext<BlogContextType>({
    currentUser: null,
    setCurrentUser: () => { },
});

const Context: React.FC<ContextProps> = ({ children }: ContextProps) => {
    const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // Cast the user object to the expected type
                setCurrentUser(user as firebase.User);
            } else {
                setCurrentUser(null);
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