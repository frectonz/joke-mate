import { getRandomJoke } from "../api/index";
import usePromise from "./usePromise";
import { useCallback } from "react";

const useRandomJoke = () => {
    const promise = useCallback(async () => {
        return await getRandomJoke();
    }, [])
    const { data: randomJoke, isLoading, error, execute } = usePromise(promise);

    return {
        randomJoke,
        error,
        execute,
        isLoading
    };
};

export default useRandomJoke;
