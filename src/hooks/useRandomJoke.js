import usePromise from "./usePromise";
import { useCallback } from "react";

const getRandomJoke = async () => {
  const res = await fetch("https://v2.jokeapi.dev/joke/Any?format=txt", {
    method: "GET",
  });
  const data = await res.text();
  return data;
};

const useRandomJoke = () => {
  const promise = useCallback(async () => {
    return await getRandomJoke();
  }, []);

  const { data: joke, isLoading, error, execute } = usePromise(promise);

  return {
    joke,
    error,
    execute,
    isLoading,
  };
};

export default useRandomJoke;
