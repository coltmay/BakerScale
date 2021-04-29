export const RecipeIngredientsList = ({ ingredient }) => {
    if (ingredient.measurement.id === 1) {
        return <CupCard ingredient={ingredient}/>
    } else if (ingredient.measurement.id === 2) {
        return <TablespoonCard ingredient={ingredient}/>
    } else if (ingredient.measurement.id === 3) {
        return <TeaspoonCard ingredient={ingredient}/>
    } else {
        return "";
    }
}

const CupCard = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName"><b>{ingredient.ingredient.name}</b></p>
        <div className="ingredientConvert">
            <p className="ingredientImperial"><b>{ingredient.measurementAmount}</b> cup(s)</p>
            <p className="ingredientGrams"><b>{ingredient.measurementAmount * ingredient.ingredient.cupToGram}</b> grams</p>
        </div>
    </div>
)

const TablespoonCard = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName"><b>{ingredient.ingredient.name}</b></p>
        <div className="ingredientConvert">
            <p className="ingredientImperial"><b>{ingredient.measurementAmount}</b> tablespoon(s)</p>
            <p className="ingredientGrams"><b>{ingredient.measurementAmount * ingredient.ingredient.tablespoonToGram}</b> grams</p>
        </div>
    </div>
)

const TeaspoonCard = ({ ingredient }) => (
    <div className="detailIngredient">
        <p className="ingredientName"><b>{ingredient.ingredient.name}</b></p>
        <div className="ingredientConvert">
            <p className="ingredientImperial"><b>{ingredient.measurementAmount}</b> teaspoon(s)</p>
            <p className="ingredientGrams"><b>{ingredient.measurementAmount * ingredient.ingredient.teaspoonToGram}</b> grams</p>
        </div>
    </div>
)