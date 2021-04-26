import React, { useState, useEffect } from 'react'
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
                <div className="conversionIcons"></div>
            </section>
            <button>Add Measurement</button>
        </section>
    )
}