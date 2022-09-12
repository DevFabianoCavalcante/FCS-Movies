import * as C from './cardMoviesStyle';
import StarIcon from './utils/img/starIcon.svg';
import { useNavigate, useParams } from 'react-router-dom'

interface Card {
    poster: string,
    title: string,
    score: string,
    id: number,
}

export const CardMovies = ({poster, title, score, id}: Card) => {
    const navigate = useNavigate();

    const sizeTitle = (titleMovie: string) => {
        if(titleMovie.length > 25) {
            const newTitle = titleMovie.substring(0, 24);
            return `${newTitle}...`;
        } else {
            return titleMovie;
        }
    }

    const handleDetailsMovie = () => {
        navigate(`/movies:${id}`);
    };

    return (
        <C.CardContainer>
            <C.ImageContainer>
                <img src={poster} alt='Poster do filme' />
            </C.ImageContainer>
            <C.InfoFilm>
                <p>{sizeTitle(title)}</p>
                <C.ScoreMovie>
                    <img src={StarIcon} alt='Ícone de uma estrela' />
                    <p>{score}</p>
                </C.ScoreMovie>
            </C.InfoFilm>
            <C.BtnDetails onClick={handleDetailsMovie}>Detalhes</C.BtnDetails>
        </C.CardContainer>
    );
};
