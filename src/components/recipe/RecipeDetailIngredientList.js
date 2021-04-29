export const RecipeIngredientsList = ({ ingredient }) => {
    if (ingredient.measurement.id === 1) {
        return <CupCard ingredient={ingredient}/>
    } else if (ingredient.measurement.id === 2) {
        return <TablespoonCard ingredient={ingredient}/>
    } else if (ingredient.measurement.id === 3) {
        return <TeaspoonCard ingredient={ingredient}/>
    }
}

const CupCard = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName">{ingredient.ingredient.name}</p>
        <div className="ingredientConvert">
            <p className="ingredientImperial">{ingredient.measurementAmount} cup(s)</p>
            <p className="ingredientGrams">{ingredient.measurementAmount * ingredient.ingredient.cupToGram} grams</p>
        </div>
    </div>
)

const TablespoonCard = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName">{ingredient.ingredient.name}</p>
        <div className="ingredientConvert">
            <p className="ingredientImperial">{ingredient.measurementAmount} tablespoon(s)</p>
            <p className="ingredientGrams">{ingredient.measurementAmount * ingredient.ingredient.tablespoonToGram} grams</p>
        </div>
    </div>
)

const TeaspoonCard = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName">{ingredient.ingredient.name}</p>
        <div className="ingredientConvert">
            <p className="ingredientImperial">{ingredient.measurementAmount} teaspoon(s)</p>
            <p className="ingredientGrams">{ingredient.measurementAmount * ingredient.ingredient.teaspoonToGram} grams</p>
        </div>
    </div>
)