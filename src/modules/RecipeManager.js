const remoteURL = "http://localhost:5002";

export const getAllRecipes = () => {
    return fetch (`${remoteURL}/recipies`)
    .then(res => res.json())
}