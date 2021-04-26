import React, { useState, useEffect, useImperativeHandle } from 'react'
import { useHistory } from 'react-router'
import { getCurrentUser } from '../helper/helperFunctions'
import { getAllRecipes } from '../../modules/RecipeManager'
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

    // TODO ============================================================================== 
    /* ===================================================================================
    
    So... What do I need to do?

    I'll need to add a title, which is covered in the name.
    I'll need to add a blurb, covered by blurb.
    I'll need to add ingredients, multiple of them.  How will that work?  Let's sort it out right now...



    ====================================================================================*/
    // TODO ============================================================================== 



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
                        onChange={null} />
                </div>
                <div className="blurbBox">
                    <label htmlFor="inputBlurb">Blurb</label>
                    <textarea className=""
                        type="blurb"
                        id="blurb"
                        required
                        value={recipe.blurb}
                        onChange={null} />
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
                <div className="directionBox">
                    <label htmlFor="inputDirections">Directions</label>
                    <textarea className=""
                        type="directions"
                        id="directions"
                        required
                        value={recipe.directions}
                        onChange={null} />
                </div>
                <section className="addButtonBox">
                    <button className="formCancelButton"
                        onClick={(() => history.push("/recipes"))}
                    >Cancel</button>
                    <button className="formAddButton"
                        onClick={null}
                    >Add Recipe</button>
                </section>
            </form>
        </section>
    )
}