import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import Loading from "../Components/Loading/Loading";
import { collection, onSnapshot, query } from "firebase/firestore";
import { User } from "firebase/auth"; // Import User interface

interface ContextProps {
    children: React.ReactNode;
}

interface BlogContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const blogContext = createContext<BlogContextType>({
    currentUser: null,
    setCurrentUser: () => { },
});

const Context: React.FC<ContextProps> = ({ children }: ContextProps) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true); // Set loading to true initially
    const [allUsers, setAllUsers] = useState<User[]>([]); // Type allUsers as User[]

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        const getUsers = () => {
            const postRef = query(collection(db, "users")); // Modify query as needed
            onSnapshot(postRef, (snapshot) => {
                setAllUsers(
                    snapshot.docs.map((doc) => ({
                        ...doc.data() as User, // Assert doc.data() as User
                        id: doc.id,
                    }))
                );
            });
        };
        getUsers();
    }, []);

    console.log(allUsers); 
    return (
        <blogContext.Provider value={{ currentUser, setCurrentUser }}>
            {loading ? <Loading /> : children}
        </blogContext.Provider>
    );
};

export default Context;

export const useBlogContext = (): BlogContextType => useContext(blogContext);
