import { useState, useCallback, useEffect } from "react"

const usePromise = (promiseFn, immediate = true) => {
    // All States neccessary for the promise.
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // the functon that executes the promise.
    const execute = useCallback(async (...args) => {
        try {
            // set is loading to true.
            setIsLoading(true)
            // wait for the promise to resolve.
            const newData = await promiseFn(...args);
            // set the new data resolved from the promise
            setData(newData);
        } catch (err) {
            // the promise rejected.
            setError(err);
        } finally {
            // set loading to false.
            setIsLoading(false);
        }
    }, [setData, setIsLoading, setError, promiseFn]); // re-run if setData, setIsLoading, setError or promiseFn chenges. 

    // useEffect to run the execute function once.
    useEffect(() => {
        if (immediate) execute();
    }, [execute, immediate]); // re-run if execute changes.

    return {
        data,
        isLoading,
        error,
        execute
    }
}

export default usePromise;