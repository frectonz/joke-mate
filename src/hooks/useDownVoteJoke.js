import { downVoteJoke } from "../api";
import usePromise from "./usePromise";
import { useCallback } from "react";

const useDownVoteJoke = () => {
  const promise = useCallback(async (...args) => {
    return await downVoteJoke(...args);
  }, []);

  const {
    execute: downVoteJokeById,
    isLoading: isDownVoting,
    error: downVotingError,
    data: downVotedJoke,
  } = usePromise(promise, false);

  return [
    downVoteJokeById,
    {
      downVotedJoke,
      isDownVoting,
      downVotingError,
    },
  ];
};

export default useDownVoteJoke;
