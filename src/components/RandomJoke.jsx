import React from "react";
import useRandomJoke from "../hooks/useRandomJoke";

function RandomJoke() {
  const { isLoading, error, joke, execute } = useRandomJoke();

  return (
    <div className="joke">
      <JokeContent
        joke={isLoading ? "Loading..." : error ? "Couldn't fetch a joke" : joke}
      />
      <div className="joke__actions">
        <button
          className={isLoading ? "btn--disabled" : "btn"}
          onClick={execute}
        >
          {error ? "Try Again" : "Get Another"}
        </button>
      </div>
    </div>
  );
}

const JokeContent = ({ joke }) => {
  return <div className="joke__content">{joke}</div>;
};

export default RandomJoke;
