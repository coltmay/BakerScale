import React from "react";
import saveIcon from '../../images/saveIcon.png'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';

export const ConversionDisplayCard = ({ingredient}) => (
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
                    <input className="displayConversion"value="teaspoon"></input>
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
            <a href=""><img src={saveIcon} /></a>
            <a href=""><img src={editIcon} /></a>
            <a href=""><img src={deleteIcon} /></a>
        </div>
    </section>
)