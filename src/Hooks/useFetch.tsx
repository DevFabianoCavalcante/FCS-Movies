import React from 'react';
import axios from 'axios';

interface FetchRequest<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

function useFetch <T>(url: string): FetchRequest<T> {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState<string | null>(null);
    const [loading, setLoading] = React.useState(true);

    const urlBaseApiData: string = import.meta.env.VITE_API_URL_BASE;

    React.useEffect (()=>{
        setData(null);
        setError(null);
        setLoading(true)

        const http = axios.create({
            baseURL: urlBaseApiData
        })

        http.get(url)
        .then(response => { 
            if(response.status === 200) {
                setData(response.data.results);
                setInterval(()=> setLoading(false), 1000);
            }
        }).catch(error => {
            setError(`${error}`);
            setInterval(()=> setLoading(false), 1000);
        })

    },[url])
    
    return {data, error, loading}
}


export default useFetch;
