import * as C from './initialContentStyle';
import Arrow from '../../pages/landing/utils/img/arrow.svg';
import { Link } from 'react-router-dom';

export const InitialContent = () => {
    
    return (
        <C.InitialContent>
            <h1>Veja os <span>melhores</span> filmes e séries da atualidade na palma da sua mão</h1>
            <div>
              <p>Comece a assistir agora</p>
              <a href='#plans'><img src={Arrow} alt="Imagem de uma seta" /></a>
              
            </div>
        </C.InitialContent>
    )
};

