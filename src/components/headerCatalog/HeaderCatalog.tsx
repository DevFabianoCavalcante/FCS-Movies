import { FormEvent, useContext, useState } from 'react';

import * as C from './HeaderCatalogStyle';
import { AuthContext } from '../../Context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import { Logo } from '../Logo/Logo';

export const HeaderCatalog = () => {
    const {userProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const nameUser = userProfile.displayName.split(' ')[0];

    const logoutUser = () => {
        navigate('/login');
    } 

    return (
        <C.HeaderContainer>
                <Link to='/movies'><Logo effects={"transition--animationX"}>FCS MOVIES</Logo></Link>
            <C.ProfileArea>
                <h1>Bem vindo, {nameUser}</h1>
                <button type='button' onClick={logoutUser}>Sair</button>
            </C.ProfileArea>
        </C.HeaderContainer>
    );
};
