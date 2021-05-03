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
