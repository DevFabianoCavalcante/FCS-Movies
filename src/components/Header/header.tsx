import * as C from './headerStyle';
import { Link } from 'react-router-dom'

export const Header = () => {
    
    return (
        <C.Header>
          <h1>FCS Movies</h1>
          <Link to='/login'><button type='button'>ACESSAR</button></Link>
        </C.Header>
    )
}