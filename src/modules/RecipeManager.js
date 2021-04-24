const remoteURL = "http://localhost:5002";

export const getAllRecipes = () => {
    return fetch (`${remoteURL}/recipes`)
    .then(res => res.json())
}