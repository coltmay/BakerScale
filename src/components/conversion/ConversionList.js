import React, { useState, useEffect } from 'react'
import { ConversionEditCard } from './ConversionEditCard'
import { ConversionDisplayCard } from './ConversionDisplayCard'
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
            <ConversionDisplayCard/>
            <ConversionEditCard/>
            <button className="conversionAddButton">Add Measurement</button>
        </section>
    )
}