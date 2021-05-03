import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { ConversionDisplayCard } from './ConversionDisplayCard'
import { getAllIngredients } from '../../modules/ConversionManager'
import './ConversionList.css'

export const ConversionList = () => {
    const [ingredients, setIngredients] = useState([]);
    const history = useHistory();

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
            <button className="conversionAddButton" onClick={() => { history.push("/conversions/add") }}>Add Measurement</button>
        </section>
    )
}