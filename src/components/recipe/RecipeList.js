import React, { useState, useEffect } from 'react'
import { RecipeCard } from './RecipeCard'
import { getAllRecipes } from '../../modules/RecipeManager'

// A function to return recipes in a list format.
export const RecipeList = () => {
    // Declaring recipes as a state variable.
    const [recipes, setRecipes] = useState([]);

    // A function to get the recipes.
    const getRecipes = () => {
        return getAllRecipes().then(recipesFromAPI => {
                setRecipes(recipesFromAPI);
            });
    };

    // A useEffect invoke getRecipes
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            <button>Add Recipe</button>
            {recipes.map(recipe => <RecipeCard
                                    key={recipe.id}
                                    recipe={recipe}
            />)}
        </>
    )
};