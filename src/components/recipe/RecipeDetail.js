import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import { RecipeIngredientsList } from './RecipeDetailIngredientList'
import { deleteRecipe, getIngredientsByRecipe, getRecipeById } from '../../modules/RecipeManager'
import { getCurrentUser } from '../helper/helperFunctions'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';
import './RecipeDetail.css'

export const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();
    const [ingredients, setIngredients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    const handleDelete = () => {
        setIsLoading(true)
        deleteRecipe(recipeId)
            .then(history.push("/recipes"))
    }

    useEffect(() => {
        getRecipeById(recipeId)
            .then(recipe => {
                setRecipe(recipe)
                setIsLoading(false)
            })
    }, [recipeId])

    useEffect(() => {
        getIngredientsByRecipe(recipeId)
            .then(ingredientsFromAPI => {
                setIngredients(ingredientsFromAPI)
                setIsLoading(false)
            })
    }, [recipeId])

    return (
        <section className="detailPage">
            <h1 className="detailTitle">{recipe.title?.toUpperCase()}</h1>
            <div className="detailSeperator"></div>
            <section className="headerSection">
                <p className="detailUser" >By {recipe.user?.name}</p>
                {recipe.userId === getCurrentUser() ?
                    <div className="detailButtonBin">
                        <Link to={`/recipes/${recipe.id}/edit`}>
                            <img className="detailEditIcon"
                                src={editIcon} />
                        </Link>
                        <a href=''>
                            <img className="detailDeleteIcon"
                                src={deleteIcon}
                                onClick={handleDelete} />
                        </a>
                    </div>
                    : null
                }
            </section>
            <img></img>
            <p className="detailBlurb">{recipe.blurb}</p>
            <div className="detailSeperator"></div>
            <section className="detailSubPage">
                <div className="detailIngMeas">
                    <h2 className="detailIngredientsHeading">Ingredients</h2>
                    <h2 className="detailMeasurementsHeading">Measurements</h2>
                </div>
                {/* --------------There will be many of these!  But how?...mapping...-------------- */}
                {
                    ingredients.map(ingredient => <RecipeIngredientsList
                        key={ingredient.id}
                        ingredient={ingredient} />)}
                {/* --------------There will be many of these!  But how?-------------- */}
            </section>
            <section className="detailDirectionBox">
                <h2>Directions</h2>
                <p>{recipe.directions}</p>
            </section>
        </section>
    )
}

