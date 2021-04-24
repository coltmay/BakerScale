import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RecipeCard } from './RecipeCard'
import { getAllRecipes, deleteRecipes } from '../../modules/RecipeManager'

// A function to return recipes in a list format.
export const RecipeList = () => {
    // Declaring recipes as a state variable.
    const [recipes, setRecipes] = useState([]);
    // Using history to manipulate stack
    const history = useHistory();

    // A function to get the recipes.
    const getRecipes = () => {
        return getAllRecipes().then(recipesFromAPI => {
            recipesFromAPI.sort((recipeA, recipeB) => {
                return recipeB.timestamp - recipeA.timestamp
            })
            setRecipes(recipesFromAPI);
            });
    };

    const deleteAndSetRecipes = (id) => {
        deleteRecipes(id)
            .then(() => getRecipes())
    }

    // A useEffect invoke getRecipes
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            <button className=""
                    onClick={() => history.push("/recipes/add")}
            >Add Recipe</button>
            {recipes.map(recipe => <RecipeCard
                                    key={recipe.id}
                                    recipe={recipe}
                                    deleteAndSetRecipes={deleteAndSetRecipes}
            />)}
        </>
    )
};