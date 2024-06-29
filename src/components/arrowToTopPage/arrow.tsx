import * as C from './arrowPageStyle';
import Arrow from './utils/img/arrow-to-top-page.svg';

export const ArrowPage = () => {


    return (
        <C.ContainerArrow onClick={()=> window.scroll(0, 0)}>
            <img src={Arrow} alt='Ícone que direciona para o topo da página'/>
        </C.ContainerArrow>
    );
};
