import axios from 'axios'
import { useEffect, useState } from 'react';

const BASE_URL = 'https://api.themoviedb.org/3'


const headers = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZjExYzUxYTE3NDA1MmQ0MTBmNzUxMjRlNjA0OTFkYSIsIm5iZiI6MTY5NTIxMzY5My4wOTcsInN1YiI6IjY1MGFlODdkNmMxOWVhMDBlYmExZGQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tgH_0ZdUY0QdDKp7Mbb-VdzVZwTf9wfKKJZ33RoE-mA`
}

const useFetchData = (url, params, delay) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await axios.get(BASE_URL + url, {
                    headers,
                    params,
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        if (delay) {
            setTimeout(() => {
                fetchData()
                console.log('Delayed Request')
            }, delay)
        }
        else {
            fetchData();
        }
    }, [url, params]);

    return { data, loading, error };
};

export default useFetchData;
