const remoteURL = "http://localhost:5002";

export const getAllIngredients = () => {
    return fetch(`${remoteURL}/ingredients/`)
        .then(res => res.json())
}

