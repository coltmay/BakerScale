import React, { useState, useEffect } from 'react'
import saveIcon from '../../images/saveIcon.png'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';
import './ConversionList.css'

export const ConversionList = () => {
    //Stuff goes here...

    return (
        <section className="conversionPage">
            <section className="conversionHeaders">
                <h1 className="conversionIngredientHeader">INGREDIENT</h1>
                <h1 className="conversionMeasurementHeader">MEASUREMENT</h1>
                <h1 className="conversionConversionHeader">CONVERSION</h1>
            </section>

            <section className="conversionRow">
                <section className="secondaryConversionRow">
                    <div className="conversionIngredient">
                        <input placeholder="change"></input>
                    </div>
                    <div className="conversionMeasurement">
                        <p>1</p>
                        <select placeholder="change"></select>
                        <p>=</p>
                    </div>
                    <div className="conversionConversion">
                        <input className="conversionInput" placeholder="change"></input>
                        <p>grams</p>
                    </div>
                </section>
                <div className="conversionIcons">
                    <a href=""><img src={saveIcon} /></a>
                    <a href=""><img src={editIcon} /></a>
                    <a href=""><img src={deleteIcon} /></a>
                </div>
            </section>

            <button className="conversionAddButton">Add Measurement</button>
        </section>
    )
}