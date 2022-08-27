import { ReactElement } from 'react';
import * as C from './ListStyle';

interface Props {
    itemList: string[],
};

export const List = ({itemList}: Props) => {

    return (
        <C.List>
            {itemList.map((itemList: string, index: number) => (
                <li key={index}>{itemList}</li>
            ))}
        </C.List>
    )

}