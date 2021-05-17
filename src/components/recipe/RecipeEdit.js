import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getIngredientsByRecipe, getRecipeById, updateRecipe } from "../../modules/RecipeManager"
import { getCurrentUser } from '../helper/helperFunctions'
import './RecipeEdit.css'

export const RecipeEdit = () => {
    const [recipe, setRecipe] = useState({})
    const { recipeId } = useParams()
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [ingredients, setIngredients] = useState([]);

    const handleFieldChange = (event) => {
        const stateToChange = { ...recipe }
        stateToChange[event.target.id] = event.target.value;
        setRecipe(stateToChange)
    }

    const updateExisitingRecipe = (event) => {
        event.preventDefault();
        setIsLoading(true)

        const editedRecipe = {
            id: recipe.id,
            title: recipe.title,
            blurb: recipe.blurb,
            userId: recipe.userId,
            imageURL: recipe.imageURL,
            directions: recipe.directions,
            timestamp: recipe.timestamp
        }

        updateRecipe(editedRecipe)
            .then(() => history.push("/recipes"))
    }

    useEffect(() => {
        getRecipeById(recipeId)
            .then(recipe => {
                setRecipe(recipe)
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        getIngredientsByRecipe(recipeId)
            .then(ingredientsFromAPI => {
                setIngredients(ingredientsFromAPI)
                setIsLoading(false)
            })
    }, [recipeId])

    return (
        <section className="recipeEditPage">
            <form className="recipeEditForm">
                <div className="titleBox">
                    <label htmlFor="inputTitle">Title</label>
                    <input className=""
                        type="title"
                        id="title"
                        required
                        value={recipe.title}
                        onChange={handleFieldChange} />
                </div>
                <div className="blurbBox">
                    <label htmlFor="inputBlurb">Blurb</label>
                    <textarea className=""
                        type="blurb"
                        id="blurb"
                        required
                        value={recipe.blurb}
                        onChange={handleFieldChange} />
                </div>
                <button className="ingredientEditButton"
                        onClick={() => history.push(`/recipes/add/ingredients/${recipeId}`)}>Edit Ingredients</button>
                <div className="directionBox">
                <label htmlFor="inputDirections">Directions</label>
                <textarea className=""
                    type="directions"
                    id="directions"
                    required
                    value={recipe.directions}
                    onChange={handleFieldChange} />
                    </div>
                    <section className="editButtonBox">
                    <button className="formCancelButton"
                        onClick={(() => history.push("/recipes"))}
                    >Cancel</button>
                    <button className="formEditButton"
                        onClick={updateExisitingRecipe}
                    >Update Recipe</button>
                </section>
            </form>
        </section>
    )
}