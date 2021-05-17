import React from 'react'
import saveIcon from '../../images/saveIcon.png'
import './RecipeForm.css'

export const RecipeIngredientFormCard = ({ ingredients, recipeIngredient, handleControlledInputChange, handelClickSave }) => {

    return (
        <>
            <section className="conversionBox">
                <div className="ingredientBox">
                    <label htmlFor="inputIngredients">Ingredient</label>
                    <select className=""
                        id="ingredientId"
                        value={recipeIngredient.ingredientId}
                        onChange={handleControlledInputChange}>
                        <option value={null}></option>
                        {ingredients.map(ingredient => {
                            return <option key={ingredient.id} value={ingredient.id}>{ingredient.name}</option>
                        })}
                    </select>
                </div>
                <div className="quantityBox">
                    <label htmlFor="inputQuantity">Quantity</label>
                    <input className=""
                        id="measurementAmount"
                        value={recipeIngredient.measurementAmount}
                        onChange={handleControlledInputChange} />
                </div>
                <div className="measurementBox">
                    <label htmlFor="inputMeasurement">Measurement</label>
                    <select className=""
                        id="measurementId"
                        value={recipeIngredient.measurementId}
                        onChange={handleControlledInputChange}>
                        <option value={null}></option>
                        <option value='1'>cup(s)</option>
                        <option value='2'>tablespoon(s)</option>
                        <option value='3'>teaspoon(s)</option>
                    </select>
                </div>
                <a href='' className="recipeIngredientButtonBox">
                    <img className="recipeIngredientSaveIcon"
                        src={saveIcon}
                        onClick={handelClickSave} />
                </a>
            </section>
        </>
    )
}