import * as C from './creditStyle';
import Gmail from './utils/img/gmail.svg';
import Github from './utils/img/github.svg';
import Linkedin from './utils/img/linkedin.svg';

export const Credits = () => {

    return (
        <C.CreditArea>
            <C.Dev>Desenvolvido por Fabiano Cavalcante, 2022</C.Dev>
            <C.AreaSocialLinks>
                <a href='mailto:7fabiano.silva@gmail.com' target='_blank'>
                    <img src={Gmail} alt='Ícone Gmail' />
                </a>

                <a href='https://github.com/DevFabianoCavalcante/' target='_blank'>
                    <img src={Github} alt='Ícone Github' />
                </a>

                <a href='https://www.linkedin.com/in/fabiano-cavalcante-99811221a/' target='_blank'>
                    <img src={Linkedin} alt='Ícone Linkedin' />
                </a>
            </C.AreaSocialLinks>
        </C.CreditArea>
    )
}