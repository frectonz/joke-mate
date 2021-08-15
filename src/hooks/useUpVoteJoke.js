import { upVoteJoke } from "../api";
import usePromise from "./usePromise";
import { useCallback } from "react";

const useUpVoteJoke = () => {
  const promise = useCallback(async (...args) => {
    return await upVoteJoke(...args);
  }, []);
  const {
    execute: upVoteJokeById,
    isLoading: isUpVoting,
    error: upVotingError,
    data: upVotedJoke,
  } = usePromise(promise, false);

  return [
    upVoteJokeById,
    {
      upVotedJoke,
      isUpVoting,
      upVotingError,
    },
  ];
};

export default useUpVoteJoke;
