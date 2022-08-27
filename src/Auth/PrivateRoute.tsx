import React, { ReactComponentElement, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

interface Props {
    children: React.ReactNode,
};

export const PrivateRoute = ({ children }: Props) => {
    const { userProfile }  = useContext(AuthContext);
    console.log(userProfile);

    return (
        <div>
            {userProfile ? children : <Navigate to='/' />}
        </div>
    );
};
