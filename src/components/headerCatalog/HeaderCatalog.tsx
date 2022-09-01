import { FormEvent, useContext, useState } from 'react';

import * as C from './HeaderCatalogStyle';
import SearchIcon from '../../pages/catalog/utils/img/searchIcon.svg';
import { AuthContext } from '../../Context/AuthContext';

export const HeaderCatalog = () => {
    const {userProfile, setUserProfile} = useContext(AuthContext);
    const [valueSearch, setValueSearch] = useState<string>('');

    const nameUser = userProfile.displayName.split(' ')[0];

    const handleInputSearch = (e: FormEvent<HTMLInputElement>) => {
        setValueSearch(e.currentTarget.value);
    };

    const logoutUser = () => {
        setUserProfile(null);
    } 

    return (
        <C.HeaderContainer>
            <C.Search>
                <input type='text' name='search' value={valueSearch} onChange={handleInputSearch} />
                <img src={SearchIcon} alt='Ícone de uma lupa' />
            </C.Search>
            <C.ProfileArea>
                <h1>Bem vindo, {nameUser}</h1>
                <button type='button' onClick={logoutUser}>Sair</button>
            </C.ProfileArea>
        </C.HeaderContainer>
    );
};
