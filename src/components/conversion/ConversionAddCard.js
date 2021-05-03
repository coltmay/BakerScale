import React, { useEffect, useState } from "react";
import saveIcon from '../../images/saveIcon.png'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';
import { useHistory } from "react-router";
import { addIngredient } from "../../modules/ConversionManager";

export const ConversionAddCard = () => {
    const [ingredient, setIngredient] = useState({
        name: "",
        teaspoonToGram: "",
        tablespoonToGram: "",
        cupToGram: "",
        editState: false
    });
    const history = useHistory();

    const handleControlledInputChange = (event) => {

        const newIngredient = { ...ingredient };

        let selectedValue = event.target.value;

        newIngredient[event.target.id] = selectedValue;

        setIngredient(newIngredient)
    }

    const handleClickSave = (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        addIngredient(ingredient)
            .then(() => history.push("/conversions"))
    }

    return (
        <section className="conversionRow addConversionRow">
            <section className="secondaryConversionRow">
                <div className="conversionIngredient">
                    <input className="editConversion ingredientField" onChange={handleControlledInputChange} placeholder="Ingredient Name" id="name" value={ingredient.name}></input>
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
                        <input className="conversionInput editConversion" id="cupToGram" onChange={handleControlledInputChange} value={ingredient.cupToGram}></input>
                        <p>grams</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput editConversion" id="tablespoonToGram" onChange={handleControlledInputChange} value={ingredient.tablespoonToGram}></input>
                        <p>grams</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput editConversion" id="teaspoonToGram" onChange={handleControlledInputChange} value={ingredient.teaspoonToGram}></input>
                        <p>grams</p>
                    </div>
                </div>
            </section>
            <div className="conversionIcons">
                <a href=""><img src={saveIcon} onClick={handleClickSave} /></a>
                {/* <a href=""><img src={deleteIcon} /></a> */}
            </div>
        </section>
    )
}