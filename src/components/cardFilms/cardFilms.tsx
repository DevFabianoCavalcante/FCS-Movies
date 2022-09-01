import * as C from './cardFilmsStyle';
import StarIcon from './utils/img/starIcon.svg';

export const CardFilms = () => {

    return (
        <C.CardContainer>
            <C.ImageContainer>
                <img src={} alt='Poster do filme' />
            </C.ImageContainer>
            <C.InfoFilm>
                <p>{}</p>
                <C.ScoreMovie>
                    <img src={StarIcon} alt='Ícone de uma estrela' />
                    <p>{}</p>
                </C.ScoreMovie>
                <C.BtnDetails>Detalhes</C.BtnDetails>
            </C.InfoFilm>
        </C.CardContainer>
    );
};
