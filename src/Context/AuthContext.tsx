import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, getAuth } from "firebase/auth";


interface ComponentWithChildrenProps {
    children: React.ReactNode
};

export const AuthContext = createContext<any>({});

export const AuthProvider = (props: ComponentWithChildrenProps) => {

    const { children } = props;
    const [userProfile, setUserProfile] = useState<User | null>();

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUserProfile(user);
            console.log(userProfile);
        });

    return <AuthContext.Provider value={{userProfile, setUserProfile}}> {children} </AuthContext.Provider>
}

