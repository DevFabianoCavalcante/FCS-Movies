import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';

interface Props {
    children: React.ReactNode,
};

export const PrivateRoute = ({ children }: Props) => {
    const {userProfile} = useContext(AuthContext)
    console.log(userProfile, 'userP');

    return (
        <div>
            {userProfile ? children : <Navigate to='/login' />}
        </div>
    );
};
