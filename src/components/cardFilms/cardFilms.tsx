import * as C from './cardFilmsStyle';
import StarIcon from './utils/img/starIcon.svg';
import imgTeste from './utils/img/content_pic.jpg';

interface Card {
    poster: string,
    title: string,
    score: string,
}

export const CardFilms = ({poster, title, score}: Card) => {

    const sizeTitle = (titleMovie: string) => {
        if(titleMovie.length > 25) {
            const newTitle = titleMovie.substring(0, 24);
            return `${newTitle}...`;
        } else {
            return titleMovie;
        }
    }

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
            <C.BtnDetails>Detalhes</C.BtnDetails>
        </C.CardContainer>
    );
};
