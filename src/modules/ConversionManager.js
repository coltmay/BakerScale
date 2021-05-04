const remoteURL = "http://localhost:5002";

export const getAllIngredients = () => {
    return fetch(`${remoteURL}/ingredients/`)
        .then(res => res.json())
}

export const addIngredient = (newIngredient) => {
    return fetch(`${remoteURL}/ingredients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newIngredient)
    }).then(response => response.json())
}

export const updateIngredient = (editedIngredient) => {
    return fetch(`${remoteURL}/ingredients/${editedIngredient.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedIngredient)
    }).then(data => data.json());
}

export const getIngredientById = (ingredientId) => {
    return fetch(`${remoteURL}/ingredients/${ingredientId}`)
        .then(res => res.json())
}

export const deleteIngredient = (ingredientId) => {
    return fetch(`${remoteURL}/ingredients/${ingredientId}`, {
        method: "DELETE"
    }).then(res => res.json())
}