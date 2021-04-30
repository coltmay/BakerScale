export const RecipeEditIngredientlist = ({ ingredient  }) => (
    <section className="conversionBox">
        <div className="ingredientBox">
            <label htmlFor="inputIngredients">Ingredient</label>
            <input className=""
                id="ingredients"
                required
                value={ingredient.ingredient.name}
                onChange={null} />
        </div>
        <div className="quantityBox">
            <label htmlFor="inputQuantity">Quantity</label>
            <input className=""
                id="quantity"
                required
                value={ingredient.measurementAmount}
                onChange={null} />
        </div>
        <div className="measurementBox">
            <label htmlFor="inputMeasurement">Measurement</label>
            <select className="" id="measurement" required onChange={null}>
                <option value='1'>cup(s)</option>
                <option value='2'>tablespoon(s)</option>
                <option value='3'>teaspoon(s)</option>
            </select>
        </div>
    </section>
)