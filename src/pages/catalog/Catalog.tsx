import * as C from './catalogStyle';
import React, { useContext } from 'react';
import useFetch from '../../Hooks/useFetch';
import useFetchDetails from '../../Hooks/useFetchDetails';
import { AuthContext } from '../../Context/AuthContext';
import { useSearchParams, useNavigate } from 'react-router-dom';

import SearchIcon from './utils/img/searchIcon.svg';

import { HeaderCatalog } from '../../components/headerCatalog/HeaderCatalog';
import { Skeleton } from '../../components/Skeleton/Skeleton';

import Arrow from './utils/img/Arrow.svg';

export interface DataMovies {
    gende_ids: number[];
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    title: string;
    vote_average: number;
}

export interface DataDetailMovie extends DataMovies {
    runtime: number;
}


export const Catalog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    const [idMovie, setiDMovie] = React.useState<string>('');
    const [inputSearch, setInputSearch] = React.useState('');
    const [showDropdownSlide, setShowDropdownSlide] = React.useState<number | null>(null);

    const {userProfile} = useContext(AuthContext);

    const key: string = import.meta.env.VITE_API_KEY;
    const urlBase = import.meta.env.VITE_API_URL_BASE;
    const imgUrlBase = import.meta.env.VITE_IMG_URL_BASE;

    const {data: dataNewMovies, loading: loadingNewMovies, error: errorNewMovies} = useFetch<DataMovies[]>(`/movie/popular?api_key=${key}&language=pt-BR&include_adult=false`);
    const {data: dataTopMovies, loading: loadingTopMovies, error: errorTopMovies} = useFetch<DataMovies[]>(`/movie/top_rated?api_key=${key}&language=pt-BR&include_adult=false`);
    const {data: dataActionMovies, loading: loadingActionMovies, error: errorActionMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=28,12&include_adult=false`);
    const {data: dataAnimationMovies, loading: loadingAnimationMovies, error: errorAnimationMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=16&include_adult=false`);
    const {data: dataComedyMovies, loading: loadingComedyMovies, error: errorComedyMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=35&include_adult=false`);
    const {data: dataFictionMovies, loading: loadingFictionMovies, error: errorFictionMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=878&include_adult=false`);
    const {data: dataHistoryMovies, loading: loadingHistoryMovies, error: errorHistoryMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=36&include_adult=false`);
    const {data: dataThrillerMovies, loading: loadingThrillerMovies, error: errorThrillerMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=53,9648&include_adult=false`);
    const {data: dataWarMovies, loading: loadingWarMovies, error: errorWarMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=10752&include_adult=false`);
    const {data: dataWesternMovies, loading: loadingWesternMovies, error: errorWesternMovies} = useFetch<DataMovies[]>(`/discover/movie?api_key=${key}&language=pt-BR&with_genres=37&include_adult=false`);
    const {data: dataSearchMovies} = useFetch<DataMovies[]>(`/search/movie?api_key=${key}&query=${inputSearch}&include_adult=false&language=pt-BR&page=1`);
    const {data: dataDetailMovie} = useFetchDetails<DataDetailMovie>(`${urlBase}/movie/${idMovie}?api_key=${key}&language=pt-BR`);
    
    React.useEffect(()=>{
        setSearchParams('');
    },[]);

    React.useEffect(()=>{
        if(!userProfile) {
            navigate('/login');
        }
    },[]);
    
    function getWidthSlide (slideElement: Element) {
        const slideWidth = slideElement.getBoundingClientRect().width;
        const slideMarginLeft = parseFloat(window.getComputedStyle(slideElement).marginLeft);
        const slideMarginRight = parseFloat(window.getComputedStyle(slideElement).marginRight);
        const totalSlideWidth = slideWidth + slideMarginLeft + slideMarginRight; 
        
        return totalSlideWidth;
    }

    function handlePreviousSlide (e: React.MouseEvent | React.TouchEvent) {
        const element = e.currentTarget;
        console.log(element)

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
                        const margins = 2 * parseFloat(window.getComputedStyle(slide).marginLeft);
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
        setInputSearch('');
    }

    function handleInput (e: React.ChangeEvent<HTMLInputElement>) {
        setInputSearch(e.currentTarget.value);
    }

    function handleShowDropdown (id: number) {
        setiDMovie(id.toString());
        setShowDropdownSlide(id);
    }

    function handleMouseOut () {
        setShowDropdownSlide(null);
    }

    return (
        <>
            <HeaderCatalog />
            <C.ContainerInput>
                <input type='text' name='search' value={inputSearch} onChange={handleInput} />
                <img src={SearchIcon}/>
            </C.ContainerInput>
            
            <C.ContainerSearch>
                {dataSearchMovies && dataSearchMovies.length > 0 && dataSearchMovies.filter((movie)=> movie.poster_path).map((movie)=>(
                    <div key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                        <C.Slide>
                            <img src={imgUrlBase + movie.poster_path} />
                        </C.Slide>
                    </div>
                ))}
            </C.ContainerSearch>

            {!dataSearchMovies || dataSearchMovies.length <= 0 &&
            <>
            <C.Container>
                <h1>Lançamentos</h1>
                <C.Carousel>
                    {errorNewMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorNewMovies}</h1>}
                    {loadingNewMovies && <Skeleton prop={'standard'} />}
                    {loadingNewMovies && <Skeleton prop={'standard'} />}
                    {dataNewMovies && !loadingNewMovies && dataNewMovies.map((movie) => (
                        <C.MainSlide key={movie.id} onClick={() => handleClick(movie.id)}>
                            <img src={imgUrlBase + movie.poster_path} />
                            <div>
                                <h1>{movie.title}</h1>
                                <h2>{movie.release_date.substring(0, 4)}</h2>
                                <h3>Rating TMDB: {movie.vote_average.toFixed(2)}</h3>
                                <p>{handleSizeText(movie.overview, 537)}</p>
                            </div>
                        </C.MainSlide>
                    ))}
                </C.Carousel>
                {!errorNewMovies &&
                <C.SlideController position={'55%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Melhores Avaliados</h1>
                <C.Carousel>
                    {errorTopMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorTopMovies}</h1>}
                    {loadingTopMovies && <Skeleton prop={'standard'} />}
                    {loadingNewMovies && <Skeleton prop={'standard'} />}
                    {dataTopMovies && !loadingTopMovies && dataTopMovies.map((movie) => (
                        <C.MainSlide key={movie.id} onClick={() => handleClick(movie.id)}>
                            <img src={imgUrlBase + movie.poster_path} />
                            <div>
                                <h1>{movie.title}</h1>
                                <h2>{movie.release_date.substring(0, 4)}</h2>
                                <h3>Rating TMDB: {movie.vote_average.toFixed(2)}</h3>
                                <p>{handleSizeText(movie.overview, 537)}</p>
                            </div>
                        </C.MainSlide>
                    ))}
                </C.Carousel>
                {!errorTopMovies &&
                <C.SlideController position={'55%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Ação</h1>
                <C.Carousel>
                    {errorActionMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorActionMovies}</h1>}
                    {loadingActionMovies && <Skeleton prop={'mini'} />}
                    {dataActionMovies && !loadingActionMovies && dataActionMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorActionMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Animação</h1>
                <C.Carousel>
                    {errorAnimationMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorAnimationMovies}</h1>}
                    {loadingAnimationMovies && <Skeleton prop={'mini'} />}
                    {dataAnimationMovies && !loadingAnimationMovies && dataAnimationMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorAnimationMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Comédia</h1>
                <C.Carousel>
                    {errorComedyMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorComedyMovies}</h1>}
                    {loadingComedyMovies && <Skeleton prop={'mini'} />}
                    {dataComedyMovies && !loadingComedyMovies && dataComedyMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorComedyMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Ficção</h1>
                <C.Carousel>
                    {errorFictionMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorFictionMovies}</h1>}
                    {loadingFictionMovies && <Skeleton prop={'mini'} />}
                    {dataFictionMovies && !loadingFictionMovies && dataFictionMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorFictionMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Histórico</h1>
                <C.Carousel>
                    {errorHistoryMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorHistoryMovies}</h1>}
                    {loadingHistoryMovies && <Skeleton prop={'mini'} />}
                    {dataHistoryMovies && !loadingHistoryMovies && dataHistoryMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorHistoryMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Terror</h1>
                <C.Carousel>
                    {errorThrillerMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorThrillerMovies}</h1>}
                    {loadingThrillerMovies && <Skeleton prop={'mini'} />}
                    {dataThrillerMovies && !loadingThrillerMovies && dataThrillerMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorThrillerMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Guerra</h1>
                <C.Carousel>
                    {errorWarMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorWarMovies}</h1>}
                    {loadingWarMovies && <Skeleton prop={'mini'} />}
                    {dataWarMovies && !loadingWarMovies && dataWarMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorWarMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>

            <C.Container>
                <h1>Faroeste</h1>
                <C.Carousel>
                    {errorWesternMovies && <h1 style={{fontSize: '2.4rem', color: '#FEE100', height: '10rem'}}>{errorWesternMovies}</h1>}
                    {loadingWesternMovies && <Skeleton prop={'mini'} />}
                    {dataWesternMovies && !loadingWesternMovies && dataWesternMovies.map((movie) => (
                        <C.ContainerSlide key={movie.id} onClick={() => handleClick(movie.id)} onMouseEnter={(e)=> handleShowDropdown(movie.id)} onMouseLeave={handleMouseOut}>
                            <C.Slide>
                                <img src={imgUrlBase + movie.poster_path} />
                            </C.Slide>
                            <C.DropdownSlide show={showDropdownSlide === movie.id}>
                                <h2>{handleSizeText(movie.title, 35)}</h2>
                                <div>
                                    <h3>{dataDetailMovie && dataDetailMovie?.runtime + ' min'}</h3>
                                    <h3>{movie.release_date.substring(0,4)}</h3>
                                </div>
                            </C.DropdownSlide>
                        </C.ContainerSlide>
                    ))}
                </C.Carousel>
                {!errorWesternMovies &&
                <C.SlideController position={'45%'}>
                    <button onClick={handlePreviousSlide}>
                        <img src={Arrow}/>
                    </button>
                    <button onClick={handleNextSlide}>
                        <img src={Arrow}/>
                    </button>
                </C.SlideController>}
            </C.Container>
        </>}
        </>
    );
};