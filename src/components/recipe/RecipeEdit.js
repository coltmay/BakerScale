import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router-dom"
import { getRecipeById, updateRecipe } from "../../modules/RecipeManager"
import { getCurrentUser } from '../helper/helperFunctions'
import './RecipeEdit.css'

export const RecipeEdit = () => {
    // ! ============================================================================== 
    // !                THIS WILL ALL BE CHANGED LATER TO SUITE AN EDIT
    /* ===================================================================================
    So... What do I need to do?
    I'll need to add a title, which is covered in the name.
    I'll need to add a blurb, covered by blurb.
    I'll need to add ingredients, multiple of them.  How will that work?  Let's sort it out right now...
    ====================================================================================*/
    // ! ============================================================================== 
    const [recipe, setRecipe] = useState({})
    const { recipeId } = useParams()
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

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
                {/* //TODO Change this later!
                Refactor into something that can map? */}
                <section className="conversionBox">
                    <div className="ingredientBox">
                        <label htmlFor="inputIngredients">Ingredients</label>
                        <input className=""
                            id="ingredients"
                            required
                            value={null}
                            onChange={null} />
                    </div>
                    <div className="quantityBox">
                    <label htmlFor="inputQuantity">Quantity</label>
                    <input className=""
                        id="quantity"
                        required
                        value={null}
                        onChange={null} />
                        </div>
                        <div className="measurementBox">
                    <label htmlFor="inputMeasurement">Measurement</label>
                    <select className=""
                        id="measurement"
                        required
                        value={null}
                        onChange={null} />
                        </div>
                </section>
                <button className="ingredientAddButton">Add</button>
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