import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, getAuth } from "firebase/auth";


interface ComponentWithChildrenProps {
    children: React.ReactNode
};

export const AuthContext = createContext<any>(null);

export const AuthProvider = (props: ComponentWithChildrenProps) => {

    const { children } = props;
    const [userProfile, setUserProfile] = useState<any>();

        useEffect(()=>{
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if(user) {    
                    setUserProfile(user);
                } else {
                    setUserProfile(false);
                }
            });
        },[]);

    return <AuthContext.Provider value={{userProfile, setUserProfile}}> {children} </AuthContext.Provider>
}

