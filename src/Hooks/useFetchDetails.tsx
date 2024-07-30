import React from 'react';

interface FetchRequest<T> {
    data: T | null;
    loading: boolean;
}

function useFetchDetails<T>(url: string): FetchRequest<T> {
    const [data, setData] = React.useState<T | null>(null);
    const [loading, setLoading] = React.useState(false);

    const key = import.meta.env.VITE_API_KEY;


    React.useEffect (()=>{
        setLoading(true);
        setData(null);

        async function request () {
            const response = await fetch(url);
            if(response.ok) {
                const json = await response.json();
                setData(json);
                setInterval(()=> setLoading(false), 1000);
            } else {
                setInterval(()=> setLoading(false), 1000);
                setData(null);
                throw new Error('Falha na requisição de detalhes do filme.');
            }
        }
        
        if(url) request();
    },[url])

    return {data, loading}
};

export default useFetchDetails;
