import React from "react";
import saveIcon from '../../images/saveIcon.png'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';
import { Link } from "react-router-dom";

export const ConversionDisplayCard = ({ ingredient, deleteAndSetIngredients }) => {

    return (
        <section className="conversionRow">
            <section className="secondaryConversionRow">
                <div className="conversionIngredient">
                    <input className="displayConversion ingredientDisplayConversion" value={ingredient.name}></input>
                </div>
                <div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <input className="displayConversion" value="cup"></input>
                        <p>=</p>
                    </div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <input className="displayConversion" value="tablespoon"></input>
                        <p>=</p>
                    </div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <input className="displayConversion" value="teaspoon"></input>
                        <p>=</p>
                    </div>
                </div>
                <div>
                    <div className="conversionConversion">
                        <input className="conversionInput displayConversion displayConversionGrams" value={ingredient.cupToGram}></input>
                        <p>grams</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput displayConversion displayConversionGrams" value={ingredient.tablespoonToGram}></input>
                        <p>grams</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput displayConversion displayConversionGrams" value={ingredient.teaspoonToGram}></input>
                        <p>grams</p>
                    </div>
                </div>
            </section>
            <div className="conversionIcons">
                <Link to={`/conversions/${ingredient.id}/edit`}>
                    <a href=""><img src={editIcon} /></a>
                </Link>
                <a href=""><img src={deleteIcon} onClick={() => deleteAndSetIngredients(ingredient.id)} /></a>
            </div>
        </section>
    )
}