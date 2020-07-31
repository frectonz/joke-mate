const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;
const API_HOST = process.env.REACT_APP_API_HOST;

export const getRandomJoke = async () => {
    const res = await fetch(API_URL, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
    });
    const data = await res.json();
    return data
}

export const createJoke = async (joke) => {
    const res = await fetch(API_URL, {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY,
            "content-type": "application/json",
            "accept": "application/json"
        },
        "body": JSON.stringify(joke),
    })

    const data = await res.json();
    return data;
}

export const upVoteJoke = async (id) => {
    const res = await fetch(`${API_URL}/${id}/upvote`, {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY,
            "content-type": "application/x-www-form-urlencoded"
        },
        "body": {}
    });
    const data = await res.json();
    return data;
}

export const downVoteJoke = async (id) => {
    const res = await fetch(`${API_URL}/${id}/downvote`, {
        "method": "POST",
        "headers": {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY,
            "content-type": "application/x-www-form-urlencoded"
        },
        "body": {}
    });
    const data = await res.json();
    return data;
}
