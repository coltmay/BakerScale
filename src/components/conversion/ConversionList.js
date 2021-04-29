import React, { useState, useEffect } from 'react'
import { ConversionEditCard } from './ConversionEditCard'
import { ConversionDisplayCard } from './ConversionDisplayCard'
import './ConversionList.css'
import { getAllIngredients } from '../../modules/ConversionManager'

export const ConversionList = () => {
    const [ingredients, setIngredients] = useState([]);

    const getIngredients = () => {
        return getAllIngredients()
            .then(ingredientsFromAPI => {
                let sortedIngredients = ingredientsFromAPI.sort((a, b) => a.name.localeCompare(b.name))
                setIngredients(sortedIngredients)
            })
    }

    useEffect(() => {
        getIngredients()
    }, [])

    return (
        <section className="conversionPage">
            <section className="conversionHeaders">
                <h1 className="conversionIngredientHeader">INGREDIENT</h1>
                <h1 className="conversionMeasurementHeader">MEASUREMENT</h1>
                <h1 className="conversionConversionHeader">CONVERSION</h1>
            </section>           
            {
            ingredients.map(ingredient => <ConversionDisplayCard
                        key={ingredient.id}
                        ingredient={ingredient} />)}
            {/* {ingredients.map(ingredient => <ConversionEditCard
                        key={ingredient.id}
                        ingredient={ingredient} />)} */}
            <button className="conversionAddButton">Add Measurement</button>
        </section>
    )
}