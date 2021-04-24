const remoteURL = "http://localhost:5002";

export const getAllRecipes = () => {
    return fetch(`${remoteURL}/recipes`)
        .then(res => res.json())
}

export const getRecipeById = (id) => {
    return fetch(`${remoteURL}/recipes/${id}?_expand=user`)
        .then(res => res.json())
}

export const deleteRecipes = (id) => {
    return fetch(`${remoteURL}/recipes/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}