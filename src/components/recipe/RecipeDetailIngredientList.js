export const RecipeIngredientsList = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName">{ingredient.ingredient.name}</p>
        <div className="ingredientConvert">
            <p className="ingredientImperial">{ingredient.measurementAmount} cup(s)</p>
            <p className="ingredientGrams">{ingredient.measurementAmount * ingredient.ingredient.cupToGram} grams</p>
        </div>
    </div>
)