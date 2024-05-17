import { onAuthStateChanged, User } from "firebase/auth";
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebase";
import Loading from "../Components/Loading/Loading";
import { collection, onSnapshot, query } from "firebase/firestore";

interface ContextProps {
    children: React.ReactNode;
}

export interface UserDetails {
    bio: string;
    email: string;
    id: string;
    photoURL: string;
    username: string;
    userImg: string;
    userId: string;
}

interface BlogContextType {
    currentUser: User | null;
    setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    allUsers: UserDetails[];
    userLoading: boolean;
    publish: boolean;
    setPublish: React.Dispatch<React.SetStateAction<boolean>>;
}

const blogContext = createContext<BlogContextType>({
    currentUser: null,
    setCurrentUser: () => { },
    allUsers: [],
    userLoading: true,
    publish: false,
    setPublish: () => { }
});

const Context: React.FC<ContextProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [allUsers, setAllUsers] = useState<UserDetails[]>([]);
    const [userLoading, setUserLoading] = useState<boolean>(true);
    const [publish, setPublish] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        const getUsers = () => {
            const postRef = query(collection(db, "users"));
            const unsubscribe = onSnapshot(postRef, (snapshot) => {
                setAllUsers(
                    snapshot.docs.map((doc) => ({
                        ...doc.data() as UserDetails,
                        id: doc.id,
                    }))
                );
                setUserLoading(false);
            });
            return unsubscribe;
        };
        const unsubscribe = getUsers();
        return unsubscribe;
    }, []);

    return (
        <blogContext.Provider value={{ currentUser, setCurrentUser, allUsers, userLoading, publish, setPublish }}>
            {loading || userLoading ? <Loading /> : children}
        </blogContext.Provider>
    );
};

export default Context;

export const useBlogContext = (): BlogContextType => useContext(blogContext);
