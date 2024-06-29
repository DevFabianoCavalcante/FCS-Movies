import * as C from './catalogStyle';
import React, { useEffect, useState, ChangeEvent, DetailedHTMLProps, FormEvent } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { HeaderCatalog } from '../../components/headerCatalog/HeaderCatalog';
import { CardMovies } from '../../components/cardMovies/cardMovies';
import { ArrowPage } from '../../components/arrowToTopPage/arrow';

import SearchIcon from './utils/img/searchIcon.svg';

import { Api } from '../../apis/TMDB';

export const Catalog = () => {
    const [valueSearch, setValueSearch] = useState<string>('');
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [searchMovie, setSearchMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [ typeList, setTypeList ] = useState<'topRated' | 'popular'>('topRated');

    
    const topRatedOption = document.querySelector('#topRatedOption') as HTMLElement;
    const popularOption = document.querySelector('#popularOption') as HTMLElement;

    useEffect (()=>{
        loadingMovies();
    },[]);

    const linkImgMovie = import.meta.env.VITE_IMG_URL_BASE;

    const loadingMovies = async () => {
        let jsonPopularMovies = await Api.popularMovies();
        let jsonTopMovies = await Api.topRatedMovies();
        setTopRatedMovies(jsonTopMovies.results);
        setPopularMovies(jsonPopularMovies.results);
    };

    const handleInputSearch = async (e:ChangeEvent<HTMLInputElement>) => {
        
        topRatedOption.removeAttribute('style');
        popularOption.removeAttribute('style');

        setValueSearch(e.currentTarget.value);
        searchParams.set('query', e.currentTarget.value);
        setSearchParams(searchParams);
        const nameMovie: string | null = searchParams.get('query');
        
        if(nameMovie !== null) {
            let jsonSearchMovies = await Api.searchMovies(nameMovie);
            setSearchMovie(jsonSearchMovies.results);
        }
    };

    const handleTypeList = (e: FormEvent<HTMLLIElement>) => {
        const elementLi = e.currentTarget;
        const listSelected = elementLi.getAttribute('id');
        
        if(listSelected === 'topRatedOption') {
            setTypeList('topRated');
            topRatedOption.setAttribute('style', 'color: var(--pcolor10);');
            popularOption.removeAttribute('style');
            setValueSearch('');
            setSearchParams('');
            
        } else if (listSelected === 'popularOption') {
            setTypeList('popular')
            popularOption.setAttribute('style', 'color: var(--pcolor10);');
            topRatedOption.removeAttribute('style');
            setValueSearch('');
            setSearchParams('');
        }
    }

    return (
        <C.Container>
            <HeaderCatalog />
            <C.NavbarContainer>
                <C.Navbar>
                    <li onClick={handleTypeList} id='topRatedOption'>Melhores Avaliados</li>
                    <li onClick={handleTypeList} id='popularOption'>Populares</li>
                </C.Navbar>
                <C.Search>
                    <input type='text' name='search' value={valueSearch} onChange={handleInputSearch} />
                    <img src={SearchIcon} alt='Ícone de uma lupa' />
                </C.Search>
            </C.NavbarContainer>
            <C.MoviesArea>
                {searchParams.get('query') && searchMovie.map((item: any)=>(
                    <CardMovies 
                        poster={linkImgMovie + item.poster_path}
                        score={item.vote_average}
                        title={item.title}
                        key={item.id}
                        id={item.id}
                    />
                ))}
                {typeList === 'topRated' && valueSearch === '' && topRatedMovies.map((item: any)=>(
                    <CardMovies
                        poster={linkImgMovie + item.poster_path}
                        score={item.vote_average}
                        title={item.title}
                        key={item.id}
                        id={item.id}
                    />
                ))}
                {typeList === 'popular' && valueSearch === '' && popularMovies.map((item: any)=>(
                    <CardMovies
                        poster={linkImgMovie + item.poster_path}
                        score={item.vote_average}
                        title={item.title}
                        key={item.id}
                        id={item.id}
                    />
                ))}
            </C.MoviesArea>
            <ArrowPage />
        </C.Container>
        
    );
};