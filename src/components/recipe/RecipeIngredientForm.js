import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { addRecipeIngredient, getIngredientsByRecipe, deleteRecipeIngredient } from '../../modules/RecipeManager'
import { getAllIngredients } from '../../modules/ConversionManager';
import saveIcon from '../../images/saveIcon.png'
import './RecipeForm.css'
import { RecipeIngredientFormCard } from './RecipeIngredientFormCard';
import { RecipeIngredientDisplayFormCard } from './RecipeIngredientDisplayFormCard';

export const RecipeIngredientForm = () => {
    const { recipeId } = useParams();

    const history = useHistory();

    const [recipeIngredient, setRecipeIngredient] = useState({
        recipeId: parseInt(recipeId),
        ingredientId: "",
        measurementId: "",
        measurementAmount: ""
    })
    const [ingredients, setIngredients] = useState([])
    const [recipeIngredients, setRecipeIngredients] = useState([])

    const getIngredients = () => {
        return getAllIngredients()
            .then(ingredientsFromAPI => setIngredients(ingredientsFromAPI))
    }

    const getRecipeIngredients = () => {
        getIngredientsByRecipe(recipeId)
            .then(recipeIngredientsFromAPI => setRecipeIngredients(recipeIngredientsFromAPI))
    }

    const handleControlledInputChange = (event) => {
        const newRecipeIngredient = { ...recipeIngredient }
        let selectedValue = event.target.value;
        newRecipeIngredient[event.target.id] = selectedValue
        setRecipeIngredient(newRecipeIngredient)
    }

    const handelClickSave = (event) => {
        event.preventDefault();
        addRecipeIngredient(recipeIngredient)
            .then(() => getRecipeIngredients())
        recipeIngredient.ingredientId = "";
        recipeIngredient.measurementId = "";
        recipeIngredient.measurementAmount = "";
    }

    const deleteAndSetRecipeIngredients = (recipeIngredientId) => {
        deleteRecipeIngredient(recipeIngredientId)
            .then(() => getRecipeIngredients())
    }

    useEffect(() => {
        getIngredients()
    }, [])

    useEffect(() => {
        getRecipeIngredients()
    }, [])



    return (
        <section className="recipeAddPage">
            <form className="recipeAddForm">
                {recipeIngredients.map(recipeIngredientFromDB => <RecipeIngredientDisplayFormCard
                    recipeIngredientFromDB={recipeIngredientFromDB}
                    deleteAndSetRecipeIngredients={deleteAndSetRecipeIngredients} />)}
                <RecipeIngredientFormCard
                    ingredients={ingredients}
                    recipeIngredient={recipeIngredient}
                    handleControlledInputChange={handleControlledInputChange}
                    handelClickSave={handelClickSave} />
            </form>
        </section>
    )
}