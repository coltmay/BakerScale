import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { getCurrentUser } from '../helper/helperFunctions'
import { addRecipe, getAllRecipes } from '../../modules/RecipeManager'
import './RecipeForm.css'

export const RecipeForm = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        blurb: "",
        userId: getCurrentUser(),
        imageURL: "",
        directions: ""
    })
    
    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChage = (event) => {
        const newRecipe = {...recipe};

        let selectedValue = event.target.value;

        newRecipe[event.target.id] = selectedValue;

        setRecipe(newRecipe)
    }

    const handleClickAdd = (event ) => {
        event.preventDefault();

        addRecipe(recipe)
            .then((recipeAdded) => history.push(`/recipes/add/ingredients/${recipeAdded.id}`))
    }

    return (
        <section className="recipeAddPage">
            <form className="recipeAddForm">
                <div className="titleBox">
                    <label htmlFor="inputTitle">Title</label>
                    <input className=""
                        type="title"
                        id="title"
                        required
                        value={recipe.title}
                        onChange={handleControlledInputChage} />
                </div>

                <div className="blurbBox">
                    <label htmlFor="inputBlurb">Blurb</label>
                    <textarea className=""
                        type="blurb"
                        id="blurb"
                        required
                        value={recipe.blurb}
                        onChange={handleControlledInputChage} />
                </div>

                <div className="directionBox">
                    <label htmlFor="inputDirections">Directions</label>
                    <textarea className=""
                        type="directions"
                        id="directions"
                        required
                        value={recipe.directions}
                        onChange={handleControlledInputChage} />
                </div>

                <section className="addButtonBox">
                    <button className="formCancelButton"
                        onClick={(() => history.push("/recipes"))}
                    >Cancel</button>
                    <button className="formAddButton"
                        onClick={handleClickAdd}
                    >Add Ingredients</button>
                </section>
            </form>
        </section>
    )
}