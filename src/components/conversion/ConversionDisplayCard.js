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
                    <input className="displayConversion ingredientDisplayConversion" readOnly  value={ingredient.name}></input>
                </div>
                <div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <input className="displayConversion" value="cup" readOnly></input>
                        <p>=</p>
                    </div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <input className="displayConversion" value="tablespoon" readOnly></input>
                        <p>=</p>
                    </div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <input className="displayConversion" value="teaspoon" readOnly></input>
                        <p>=</p>
                    </div>
                </div>
                <div>
                    <div className="conversionConversion">
                        <input className="conversionInput displayConversion displayConversionGrams" readOnly value={ingredient.cupToGram}></input>
                        <p>grams</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput displayConversion displayConversionGrams" readOnly value={ingredient.tablespoonToGram}></input>
                        <p>grams</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput displayConversion displayConversionGrams" readOnly value={ingredient.teaspoonToGram}></input>
                        <p>grams</p>
                    </div>
                </div>
            </section>
            <div className="conversionIcons">
                <Link to={`/conversions/${ingredient.id}/edit`}>
                    <img src={editIcon} />
                </Link>
                <a href=""><img src={deleteIcon} onClick={() => deleteAndSetIngredients(ingredient.id)} /></a>
            </div>
        </section>
    )
}