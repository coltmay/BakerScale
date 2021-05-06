import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { RecipeCard } from './RecipeCard'
import { getAllRecipes, deleteRecipe } from '../../modules/RecipeManager'
import { getCurrentUser } from '../helper/helperFunctions'
import './RecipeList.css'

// A function to return recipes in a list format.
export const RecipeList = () => {
    // Declaring recipes as a state variable.
    const [recipes, setRecipes] = useState([]);
    // Using history to manipulate stack
    const history = useHistory();

    // A function to get the recipes.
    const getRecipes = () => {
        return getAllRecipes().then(recipesFromAPI => {
            // recipesFromAPI.sort((recipeA, recipeB) => {
            //     return recipeA.timestamp - recipeB.timestamp;
            // })
            setRecipes(recipesFromAPI.reverse());
        });
    };

    const deleteAndSetRecipes = (id) => {
        deleteRecipe(id)
            .then(() => getRecipes())
    }

    // A useEffect invoke getRecipes
    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <section className="recipeListBackgroundWrapper">
            <div className="transparentWhite">
                <div className="listSection">
                    <div className="addRecipeToListBin">
                        {getCurrentUser() ?
                        <button className="addRecipeToList"
                            onClick={() => history.push("/recipes/add")}
                        >Add Recipe</button>
                        : null
                        }
                    </div>
                    {recipes.map(recipe => <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        deleteAndSetRecipes={deleteAndSetRecipes}
                    />)}
                </div>
            </div>
        </section>
    )
};