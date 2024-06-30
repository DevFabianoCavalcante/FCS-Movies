import React from 'react';
import axios from 'axios';

interface FetchRequest<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

function useFetch <T>(url: string, typeRequest: 'data' | 'image'): FetchRequest<T> {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const urlBaseApiData: string = typeRequest === data ? import.meta.env.VITE_API_URL_BASE : import.meta.env.VITE_IMG_URL_BASE;

    React.useEffect (()=>{
        setData(null);
        setError(null);
        setLoading(true);

        const http = axios.create({
            baseURL: urlBaseApiData
        })

        http.get(url)
        .then(response => { 
            if(response.status === 200) {
                setData(response.data);
                setLoading(false);
            }
        }).catch(error => {
            setError(error);
        })

    },[url])

    return {data, error, loading}
}


export default useFetch;
