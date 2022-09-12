import { FormEvent, useContext, useState } from 'react';

import * as C from './HeaderCatalogStyle';
import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

export const HeaderCatalog = () => {
    const {userProfile, setUserProfile} = useContext(AuthContext);

    const nameUser = userProfile.displayName.split(' ')[0];

    const logoutUser = () => {
        setUserProfile(false);
    } 

    return (
        <C.HeaderContainer>
            <C.Logo>
                <Link to='/movies'><h1>FCS Movies</h1></Link>
            </C.Logo>
            <C.ProfileArea>
                <h1>Bem vindo, {nameUser}</h1>
                <button type='button' onClick={logoutUser}>Sair</button>
            </C.ProfileArea>
        </C.HeaderContainer>
    );
};
