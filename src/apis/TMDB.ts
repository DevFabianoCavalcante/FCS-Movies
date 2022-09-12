import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL_BASE,
});

const key: string = import.meta.env.VITE_API_KEY;
const search: string = '/search/movie';
const query: string = '&query=';
const apiParam: string = '?api_key=';
const pageParam: string = '&page=';
const language: string = '&language=pt-BR';
const topRated: string = '/movie/top_rated';
const popularMovie: string = '/movie/popular';
const movieInfo: string = '/movie/';
const similar: string = '/similar';
const blockAdult = '&include_adult=false';


export const Api = {
    popularMovies: async () => {
        const popularMovies = await http.get(popularMovie + apiParam + key + language + blockAdult);
        return popularMovies.data;
    },
    topRatedMovies: async () => {
        const topMovies = await http.get(topRated + apiParam + key + language + blockAdult);
        return topMovies.data;
    },
    detailsMovie:  async (idMovie: string) => {
        const infoMovie = await http.get(movieInfo + idMovie + apiParam + key + language);
        return infoMovie.data;
    },
    searchMovies: async (nameMovie: string) => {
        const movie = nameMovie.replace(' ', '+');
        const searchMovie = await http.get(search + apiParam + key + query + movie + language + blockAdult);
        return searchMovie.data;
    },
    similarMovies: async (idMovie: string) => {
        const movies = await http.get(movieInfo + idMovie + similar + apiParam + key + language);
        return movies.data;
    }
};
