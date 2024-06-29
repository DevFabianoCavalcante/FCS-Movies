import * as C from "./ButtonStyle";

export interface Props {
    typeBtn?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    background?: string;
    border: boolean;
    fontSize: string;
    fontWeight: string;
    height: string;
    width: string;
    isGradient?: boolean;
    color: '#FEE100' | '#5F5400';
    onClickEvent?: ()=> void;
}

export const Button = ({children, ...props}: Props) => {

    return (
        <C.Button onClick={props.onClickEvent} type={props.typeBtn} background={props.background} color={props.color} border={props.border} fontSize={props.fontSize} fontWeight={props.fontWeight} height={props.height} width={props.width} isGradient={props.isGradient}>
            {children}
        </C.Button>
    )
}