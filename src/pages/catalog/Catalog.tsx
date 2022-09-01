import * as C from './catalogStyle';
import { HeaderCatalog } from '../../components/headerCatalog/HeaderCatalog';

export const Catalog = () => {

    return (
        <C.Container>
            <HeaderCatalog />
            <C.NavbarContainer>
                <C.Navbar>
                    <li>Melhores Avaliados</li>
                    <li>Populares</li>
                </C.Navbar>
            </C.NavbarContainer>
        </C.Container>
        
    );
};