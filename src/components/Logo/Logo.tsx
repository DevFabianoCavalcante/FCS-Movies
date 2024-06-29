import * as C from './LogoStyle';

interface Props {
    children: React.ReactNode;
    effects: string;
}

export const Logo = ({children, effects}: Props) => {
    
    return (
        <C.Logo className={effects}>{children}</C.Logo>
    )
};