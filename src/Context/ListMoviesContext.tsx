import { createContext, useState } from 'react';

interface ComponentWithChildrenProps {
    children: React.ReactNode
};

export const ListContext = createContext<any>('topRated');

export const ListProvider = ({children}: ComponentWithChildrenProps) => {
    const [typeList, setTypeList] = useState<'topRated' | 'popular'>();

    return (
        <ListContext.Provider value={{typeList, setTypeList}}>
            {children}
        </ListContext.Provider>
    );
};

