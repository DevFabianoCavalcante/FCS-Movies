import * as C from './MovieAreaStyle';
import * as CS from '../../pages/catalog/catalogStyle';
import React from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { HeaderCatalog } from '../../components/headerCatalog/HeaderCatalog';
import { Skeleton } from '../../components/Skeleton/Skeleton';
import useFetchDetails from '../../Hooks/useFetchDetails';

import { DataDetailMovie, DataMovies } from '../catalog/Catalog';

import IconCalendar from './utils/img/iconCalendar.svg';
import IconDuration from './utils/img/iconDuration.svg';
import IconStar from './utils/img/iconStar.svg';
import useFetch from '../../Hooks/useFetch';
import Arrow from '../../pages/catalog/utils/img/Arrow.svg';


interface Results {
    key: string;
    official: string;
    type: string;
    name: string;
}

interface DataVideo {
    results: Results[];
} 

interface WatchProviders {
    results: {
        BR: {
            flatrate: {
                logo_path: string;
                provider_id: number;
                provider_name: string;
            }[];
        }
    };
}

interface PosterImage {
    backdrops: {
        file_path: string;
    }[];
}

export const MovieArea = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [idMovieUrl, setIdMovieUrl] = React.useState<string>('');
    const [showDropdownSlide, setShowDropdownSlide] = React.useState<number | null>(null);
    
    const urlBase = import.meta.env.VITE_API_URL_BASE;
    const urlImage = import.meta.env.VITE_IMG_URL_BASE;
    const key: string = import.meta.env.VITE_API_KEY;

    const {id} = useParams();
    const idMovie = id?.replace(':', '');
    const {data: dataVideoMovie, loading: loadingMovieStatus} = useFetchDetails<DataVideo | null>(`https://api.themoviedb.org/3/movie/${idMovie}/videos?api_key=${key}&language=pt-BR`);
    const {data: dataMovie, loading: loadingMovie} = useFetchDetails<DataDetailMovie>(`${urlBase}/movie/${idMovie}?api_key=${key}&language=pt-BR`);
    const {data: dataWatchProviders} = useFetchDetails<WatchProviders>(`https://api.themoviedb.org/3/movie/${idMovie}/watch/providers?api_key=${key}`);
    const {data: dataImage} = useFetchDetails<PosterImage>(`https://api.themoviedb.org/3/movie/${idMovie}/images?api_key=${key}`);
    const {data: dataSimilarMovies, loading: loadingSimilarMovies, error: errorSimilarMovies} = useFetch<DataMovies[]>(`/movie/${idMovie}/recommendations?api_key=${key}&language=pt-BR`);
    const {data: dataDetailMovie} = useFetchDetails<DataDetailMovie>(`${urlBase}/movie/${idMovieUrl}?api_key=${key}&language=pt-BR`);
    console.log(dataSimilarMovies);

    const [linkVideo, setLinkVideo] = React.useState<string | null>(null);
    
    React.useEffect(()=>{
        loadingVideo();
    },[dataVideoMovie]);

    function loadingVideo (): string | null {
        if(dataVideoMovie && dataVideoMovie.results[0]) {
            setLinkVideo(`https://www.youtube.com/embed/${dataVideoMovie.results[0].key}`);
            return linkVideo;
        } else {
            setLinkVideo(null);
            return linkVideo;
        }
    } 

    function nameWatchProvider (name: string) {
        const firstName = name.split(' ')[0];

        return firstName;
    }

    function getWidthSlide (slideElement: Element) {
        const slideWidth = slideElement.getBoundingClientRect().width;
        const slideMarginLeft = parseFloat(window.getComputedStyle(slideElement).marginLeft);
        const slideMarginRight = parseFloat(window.getComputedStyle(slideElement).marginRight);
        const totalSlideWidth = slideWidth + slideMarginLeft + slideMarginRight; 
        
        return totalSlideWidth;
    }

    function handlePreviousSlide (e: React.MouseEvent | React.TouchEvent) {
        const element = e.target;

        if(element && element instanceof HTMLElement) {
            const parentController = element.parentElement;

            if(parentController) {
                const carousel = parentController.previousElementSibling;
                const slide = carousel?.firstElementChild;

                if(carousel && slide instanceof HTMLElement) {
                    if(slide.getBoundingClientRect().width < 300){
                        const totalSlideWidth = getWidthSlide(slide); 
                        window.innerWidth > 940 ? carousel.scrollLeft -= totalSlideWidth * 3 : carousel.scrollLeft -= totalSlideWidth * 1;

                    } else {
                        const margins = 2 * parseFloat(window.getComputedStyle(slide).marginLeft);
                        carousel.scrollLeft -= slide.getBoundingClientRect().width + margins;
                    }
                }
            }
        }
    }

    function handleNextSlide (e: React.MouseEvent | React.TouchEvent) {
        const element = e.currentTarget;

        if(element && element instanceof HTMLElement) {
            const parentController = element.parentElement;

            if(parentController) {
                const carousel = parentController.previousElementSibling;
                const slide = carousel?.firstElementChild;

                if(carousel && slide instanceof HTMLElement) {
                    if(slide.getBoundingClientRect().width < 300){
                        const totalSlideWidth = getWidthSlide(slide); 
                        window.innerWidth > 940 ? carousel.scrollLeft += totalSlideWidth * 3 : carousel.scrollLeft += totalSlideWidth * 1;

                    } else {
                        const margins = 2 * parseFloat(window.getComputedStyle(slide).marginRight);
                        carousel.scrollLeft += slide.getBoundingClientRect().width + margins;
                    }
                }
            }
        }
    }

    function handleSizeText (text: string, size: number) {
        if(text && typeof text === 'string') {
            if(text.length > size) {
                return text.substring(0, size - 3) + '...'
            } else {
                return text;
            }
        } else {
            return '';
        }
    }

    function handleClick (key?: number) {
        const idMovie = key ? key.toString() : null;
        if(idMovie) {
            searchParams.set('id', idMovie);
            navigate(`/movies/id=${idMovie}`);
        }
    }

    function handleShowDropdown (id: number) {
        setIdMovieUrl(id.toString());
        setShowDropdownSlide(id);
    }

    function handleMouseOut () {
        setShowDropdownSlide(null);
    }

    return (
        <>
        {dataMovie &&
        <C.ContainerPage>
            <HeaderCatalog />
            <C.ContainerMovieInfo>
                <C.MovieVideoContainer>
                    {linkVideo !== null && dataVideoMovie?.results[0].key &&
                        <>
                            <iframe
                                src={linkVideo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={dataVideoMovie?.results[0].name}
                            >     
                            </iframe>
                            <p>{dataVideoMovie?.results[0].name}</p>
                        </>
                    }
                    {linkVideo === null &&
                        <img src={urlImage + dataImage?.backdrops[0].file_path} />
                    }
                </C.MovieVideoContainer>
                <C.MovieDetails>
                    <C.ItemDescriptionMovie fontText='2.8rem' colorText='var(--scolor1)' weightText='600'>
                        <p className='title-movie'>{dataMovie.title}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <p>{dataMovie.overview}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <img src={IconDuration} alt='Ícone de duração' title='duração' />
                        <p>{`${dataMovie.runtime} minutos`}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <img src={IconCalendar} alt='Ícone calendário' title='Ano de lançamento' />
                        <p>{dataMovie.release_date.substring(0, 4)}</p>
                    </C.ItemDescriptionMovie>

                    <C.ItemDescriptionMovie fontText='2rem' colorText='var(--pcolor9)' weightText='400'>
                        <img src={IconStar} alt='ïcone de nota' title='Pontuação' />
                        <p>{dataMovie.vote_average.toFixed(2)}</p>
                    </C.ItemDescriptionMovie>

                    <C.WatchProvidersContainer>
                        <h2>Onde Assistir</h2>
                        <div>
                            {dataWatchProviders && dataWatchProviders?.results?.BR?.flatrate?.length > 0 ? (
                                dataWatchProviders.results.BR.flatrate.map((provider)=>(
                                    <span>
                                        <img key={provider.provider_id} src={urlImage + provider.logo_path} />
                                        <h3>{nameWatchProvider(provider.provider_name)}</h3>
                                    </span>
                            ))
                            ) : (
                                <h3>Apenas para alugar e/ou cinema</h3>
                            )}
                        </div>
                    </C.WatchProvidersContainer>
                </C.MovieDetails>
            </C.ContainerMovieInfo>

            <CS.Container style={{width: '100%'}}>
                <h1 style={{marginLeft: '0px'}}>Recomendações</h1>
                <CS.Carousel>
                    {errorSimilarMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorSimilarMovies}</h1>}
                    {loadingSimilarMovies && <Skeleton prop={'mini'} />}
                    {dataSimilarMovies && !loadingSimilarMovies && dataSimilarMovies.map((movie) => (
                        <CS.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={()=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <CS.Slide>
                                <img src={urlImage + movie.poster_path} />
                            </CS.Slide>
                            <CS.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </CS.DropdownSlide>
                        </CS.ContainerSlide>
                    ))}
                </CS.Carousel>
                {!errorSimilarMovies &&
                <CS.SlideController position={'45%'}>
                    <img src={Arrow} onClick={handlePreviousSlide} />
                    <img src={Arrow} onClick={handleNextSlide} />
                </CS.SlideController>}
            </CS.Container>
        </C.ContainerPage>
        }
        {!dataMovie && 
            <C.LoadingMovie>
                <h1>Carregando...</h1>
            </C.LoadingMovie>
        }
        </>
    );
};
