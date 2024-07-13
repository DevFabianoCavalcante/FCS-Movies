import React from 'react';

interface FetchRequest<T> {
    data: T | null;
    loading: boolean;
}

function useFetchMovie<T>(id: string): FetchRequest<T> {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(false);

    const key = import.meta.env.VITE_API_KEY;
    const url = import.meta.env.VITE_API_URL_BASE;


    React.useEffect (()=>{
        setLoading(true);
        setData(null);

        async function request () {
            const response = await fetch(`${url}/movie/${id}?api_key=${key}&language=pt-BR`);
            if(response.ok) {
                const json = await response.json();
                setData(json);
                setInterval(()=> setLoading(false), 1000);
            } else {
                setInterval(()=> setLoading(false), 1000);
                throw new Error('Falha na requisição de detalhes do filme.');
            }
        }
        
        if(id) request();
    },[id])

    return {data, loading}
};

export default useFetchMovie;
