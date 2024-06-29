import React from 'react';
import axios from 'axios';

interface FetchRequest<T> {
    data: T | null;
    error: string | null;
}

function useFetch <T>(url: string, options?: RequestInit): FetchRequest<T> {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    const urlBaseApi: string = import.meta.env.VITE_API_URL_BASE;

    React.useEffect (()=>{
        setData(null);
        setError(null);

        const http = axios.create({
            baseURL: urlBaseApi
        })

        http.get(url)
        .then(response => { 
            if(response.status === 200) {
                setData(response.data);
            }
        }).catch(error => {
            setError(error);
        })

    },[url])

    console.log(data && data);

    return {data, error}
}


export default useFetch;
