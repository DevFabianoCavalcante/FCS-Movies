import * as C from './catalogStyle';
import { useEffect, useState, useContext } from 'react';
import { HeaderCatalog } from '../../components/headerCatalog/HeaderCatalog';
import { CardFilms } from '../../components/cardFilms/cardFilms';

import { Api } from '../../apis/TMDB';
import { ListContext } from '../../Context/ListMoviesContext';

export const Catalog = () => {
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    
    const { typeList, setTypeList } = useContext(ListContext);

    const movieLinkImg = import.meta.env.VITE_IMG_URL_BASE;

    const loadingMovies = async () => {
        let jsonPopularMovies = await Api.popularMovies();
        let jsonTopMovies = await Api.topRatedMovies();
        setTopRatedMovies(jsonTopMovies.results);
        setPopularMovies(jsonPopularMovies.results);
    };

    useEffect (()=>{
        loadingMovies();
    },[]);

    console.log(topRatedMovies)

    return (
        <C.Container>
            <HeaderCatalog />
            <C.NavbarContainer>
                <C.Navbar>
                    <li onClick={()=> setTypeList('topRated')}>Melhores Avaliados</li>
                    <li onClick={()=> setTypeList('popular')}>Populares</li>
                </C.Navbar>
            </C.NavbarContainer>
            <C.MoviesArea>
                {typeList === 'topRated' ? topRatedMovies.map((item: any)=>(
                    <CardFilms
                        poster={movieLinkImg + item.poster_path}
                        score={item.vote_average}
                        title={item.title}
                        key={item.id}
                    />
                ))
                : popularMovies.map((item: any)=>(
                    <CardFilms
                        poster={movieLinkImg + item.poster_path}
                        score={item.vote_average}
                        title={item.title}
                        key={item.id}
                    />
                ))
                }
            </C.MoviesArea>
        </C.Container>
        
    );
};