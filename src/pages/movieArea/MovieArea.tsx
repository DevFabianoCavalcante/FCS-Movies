import * as C from './MovieAreaStyle';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderCatalog } from '../../components/headerCatalog/HeaderCatalog';

import IconCalendar from './utils/img/iconCalendar.svg';
import IconDuration from './utils/img/iconDuration.svg';
import IconStar from './utils/img/iconStar.svg';

import { Api } from '../../apis/TMDB';


export const MovieArea = () => {
    
    const linkImgMovie = import.meta.env.VITE_IMG_URL_BASE;

    const [movie, setMovie] = useState<any>();
    const [releaseDate, setReleaseDate] = useState<string>();
    const [similarMovies, setSimilarMovies] = useState([]);
    const {id} = useParams();
    const idMovie = id?.replace(':', '');
    
    useEffect(()=>{
        loadingMovie();
        loadingSimilarMovies();
        scrollTop();
    },[id]);

    const loadingMovie = async () => {
        if(idMovie) {
            const jsonMovie = await Api.detailsMovie(idMovie);
            setMovie(jsonMovie);
            setReleaseDate(jsonMovie.release_date.substring(0, 4));
        }
    };

    const loadingSimilarMovies = async () => {
        if(idMovie) {
            const jsonSimilarMovies = await Api.similarMovies(idMovie);
            setSimilarMovies(jsonSimilarMovies.results);

        }
    };

    const scrollTop = () => {
        window.scroll(0, 0);
    }


    return (
        <>
        {movie &&
        <C.ContainerPage>
            <HeaderCatalog />
            <C.ContainerMovieInfo>
                <C.MovieDetails>
                    <C.ItemDescriptionMovie fontText='2.8rem' colorText='var(--scolor1)' weightText='600'>
                        <p className='title-movie'>{movie.title}</p>
                    </C.ItemDescriptionMovie>
                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <p>{movie.overview}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <img src={IconDuration} alt='Ícone de duração' title='duração' />
                        <p>{`${movie.runtime} minutos`}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <img src={IconCalendar} alt='Ícone calendário' title='Ano de lançamento' />
                        <p>{releaseDate}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <img src={IconStar} alt='ïcone de nota' title='Pontuação' />
                        <p>{movie.vote_average.toFixed(2)}</p>
                    </C.ItemDescriptionMovie>
                </C.MovieDetails>
                <C.MoviePoster>
                    <img src={linkImgMovie + movie.poster_path} alt={movie.overview} />
                </C.MoviePoster>
            </C.ContainerMovieInfo>
            <C.BtnWatch>Assistir</C.BtnWatch>
            {/* <C.TitleExtraSection>Filmes semelhantes</C.TitleExtraSection> */}
            {/* <MoviesArea>
                {similarMovies && similarMovies.map((movie: any)=>(
                    <CardMovies 
                        poster={linkImgMovie + movie.poster_path}
                        score={movie.vote_average}
                        title={movie.title}
                        id={movie.id}
                        key={movie.id}
                    />
                ))}
            </MoviesArea> */}
        </C.ContainerPage>
        }
        {!movie && 
            <C.LoadingMovie>
                <h1>Carregando...</h1>
            </C.LoadingMovie>
        }
        </>
        );
};
