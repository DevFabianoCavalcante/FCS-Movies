import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL_BASE,
});

const apiParam = '?api_key=';
const pageParam = '&page=';
const language = '&language=pt-BR';
const key: string = import.meta.env.VITE_API_KEY;
const topRated = '/movie/top_rated';
const popularMovie = '/movie/popular';
const newMovies = '/movie/latest';


export const Api = {
    popularMovies: async () => {
        const popularMovies = await http.get(popularMovie + apiParam + key + language);
        return popularMovies.data;
    },
    topRatedMovies: async () => {
        const topMovies = await http.get(topRated + apiParam + key + language);
        return topMovies.data;
    },
    detailsMovie:  async (idMovie: string) => {
        const infoMovie = await http.get(`/movie/${idMovie}?api_key=${key}`);
        return infoMovie.data;
    },
};
