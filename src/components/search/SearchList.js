import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RecipeCard } from '../recipe/RecipeCard'
import { getAllRecipes } from '../../modules/RecipeManager';


// A function to return recipes in a list format.
export const SearchList = () => {
    // Declaring recipes as a state variable.
    const [recipes, setRecipes] = useState([]);
    // Using history to manipulate stack
    const history = useHistory();

    // A function to get the recipes.
    const getRecipes = () => {
        return getAllRecipes().then(recipesFromAPI => {
            let searchMatch = recipesFromAPI.filter(recipe => {
                if (recipe.title.toLowerCase().includes(window.sessionStorage.getItem('search').toLowerCase())
                || recipe.blurb.toLowerCase().includes(window.sessionStorage.getItem('search').toLowerCase())
                || recipe.directions.toLowerCase().includes(window.sessionStorage.getItem('search').toLowerCase())
                ){
                    return true
                }
            })
            setRecipes(searchMatch)
        });
    };

    // A useEffect invoke getRecipes
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <>
            {recipes.map(recipe => <RecipeCard
                key={recipe.id}
                recipe={recipe}
            />)}
        </>
    )
};