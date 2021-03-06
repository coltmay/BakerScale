const remoteURL = "http://localhost:5002";

export const getAllRecipes = () => {
    return fetch(`${remoteURL}/recipes`)
        .then(res => res.json())
}

export const getRecipeById = (id) => {
    return fetch(`${remoteURL}/recipes/${id}?_expand=user`)
        .then(res => res.json())
}

export const getIngredientsByRecipe = (id) => {
    return fetch(`${remoteURL}/recipeIngredients/?recipeId=${id}&_expand=recipe&_expand=ingredient&_expand=measurement`)
        .then(res => res.json())
}

export const addRecipe = (newRecipe) => {
    return fetch(`${remoteURL}/recipes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipe)
    }).then(res => res.json())
}

export const deleteRecipe = (id) => {
    return fetch(`${remoteURL}/recipes/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const updateRecipe = (editedRecipe) => {
    return fetch(`${remoteURL}/recipes/${editedRecipe.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedRecipe)
    }).then(result => result.json())
}

export const deleteRecipeIngredient = (id) => {
    return fetch(`${remoteURL}/recipeIngredients/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const getRecipeIngredientByIngredient = (id) => {
    return fetch(`${remoteURL}/recipeIngredients/?ingredientId=${id}`)
        .then(res => res.json())
}

export const addRecipeIngredient = (newRecipeIngredient) => {
    return fetch(`${remoteURL}/recipeIngredients`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newRecipeIngredient)
    }).then(res => res.json())
}