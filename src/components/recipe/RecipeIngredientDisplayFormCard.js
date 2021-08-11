import React from 'react'
import deleteIcon from '../../images/deleteIcon.png';
import './RecipeForm.css'

export const RecipeIngredientDisplayFormCard = ({ recipeIngredientFromDB, deleteAndSetRecipeIngredients }) => {

    return (
        <>
            <section className="conversionBox displayConversionBox">
                <div className="ingredientBox">
                    <label htmlFor="inputIngredients">Ingredient</label>
                    <p className="">{recipeIngredientFromDB.ingredient.name}</p>
                </div>
                <div className="quantityBox">
                    <label htmlFor="inputQuantity">Quantity</label>
                    <p className="">{recipeIngredientFromDB.measurementAmount}</p>
                </div>
                <div className="measurementBox">
                    <label htmlFor="inputMeasurement">Measurement</label>
                    <p className="">{recipeIngredientFromDB.measurement.name}</p>
                </div>
                <div className="recipeIngredientButtonBox">
                    <img className="recipeIngredientDeleteIcon"
                        src={deleteIcon}
                        onClick={() => deleteAndSetRecipeIngredients(recipeIngredientFromDB.id)} />
                </div>
            </section>
        </>
    )
}