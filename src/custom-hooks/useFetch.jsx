import React, { useState, useEffect } from 'react';

const useFetch = (requestUrl, requestObj) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async (requestUrl, requestObj, successCB, errorCB) => {
            try {
                const res = await fetch(requestUrl, requestObj);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
    }, []);
    return { response, error };
};

export default useFetch;