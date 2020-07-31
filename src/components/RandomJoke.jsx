import React, { useState } from "react";
import useRandomJoke from "../hooks/useRandomJoke";
import useUpVoteJoke from "../hooks/useUpVoteJoke";
import useDownVoteJoke from "../hooks/useDownVoteJoke";

function RandomJoke() {
    const { isLoading, error, randomJoke, execute } = useRandomJoke();
    const [
        upVoteJokeById,
        { isUpVoting, upVotingError, upVotedJoke },
    ] = useUpVoteJoke();
    const [
        downVoteJokeById,
        { downVotedJoke, isDownVoting, downVotingError },
    ] = useDownVoteJoke();

    const [currentJokeType, setCurrentJokeType] = useState("random");

    if (isLoading) {
        return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
    }

    if (error || upVotingError || downVotingError) {
        return <h1>Error</h1>;
    }
    let joke = randomJoke;

    switch (currentJokeType) {
        case "random":
            joke = randomJoke;
            break;
        case "upvoted":
            joke = upVotedJoke;
            break;
        case "downvoted":
            joke = downVotedJoke;
            break;
        default:
            joke = randomJoke;
            break;
    }

    return (
        <div className="joke">
            <JokeContent
                isUpVoting={isUpVoting}
                isDownVoting={isDownVoting}
                joke={joke}
            />
            <div className="joke__stats">
                <p>Up votes: {joke && joke.upvotes}</p>
                <p>Down votes: {joke && joke.downvotes}</p>
            </div>
            <div className="joke__actions">
                <button
                    className="btn"
                    onClick={() => {
                        upVoteJokeById(joke && joke.id);
                        setCurrentJokeType("upvoted");
                    }}
                >
                    {isUpVoting ? "Up voting..." : "Up Vote"}
                </button>
                <button
                    className="btn"
                    onClick={() => {
                        downVoteJokeById(joke && joke.id);
                        setCurrentJokeType("downvoted");
                    }}
                >
                    {isDownVoting ? "Down Voting..." : "Down Vote"}
                </button>
            </div>
            <div className="joke__actions">
                <button
                    className="btn"
                    onClick={() => {
                        execute();
                        setCurrentJokeType("random");
                    }}
                >
                    Random Joke
                </button>
            </div>
        </div>
    );
}

const JokeContent = ({ isUpVoting, joke, isDownVoting }) => {
    if (isUpVoting) {
        return <div className="joke__content">Up Voting...</div>;
    }
    if (isDownVoting) {
        return <div className="joke__content">Down Voting...</div>;
    }
    return <div className="joke__content">{joke && joke.content}</div>;
};

export default RandomJoke;
