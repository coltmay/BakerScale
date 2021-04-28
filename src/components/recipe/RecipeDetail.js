import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import { deleteRecipe, getRecipeById } from '../../modules/RecipeManager'
import saveIcon from '../../images/saveIcon.png'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';
import './RecipeDetail.css'

export const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({});
    const { recipeId } = useParams();
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

    return (
        <section className="detailPage">
            <h1 className="detailTitle">{recipe.title}</h1>
            <div className="detailSeperator"></div>
            <section className="headerSection">
                <p className="detailUser" >By {recipe.user?.name}</p>
                <Link to={`/recipes/${recipe.id}/edit`}>
                    <img className="detailEditIcon"
                        src={editIcon} />
                </Link>
                <a href=''>
                    <img className="detailDeleteIcon"
                        src={deleteIcon}
                        onClick={handleDelete} />
                </a>
            </section>
            <p className="detailBlurb">{recipe.blurb}</p>
            <div className="detailSeperator"></div>
            <section className="blash">
                <div className="detailIngMeas">
                    <h2>Ingredients</h2>
                    <h2>Measurements</h2>
                </div>
                {/* --------------There will be many of these!  But how?...mapping...-------------- */}
                <div>
                    <p>Flour</p>
                    <p>1 cup</p>
                    <p>125 grams</p>
                </div>
                {/* --------------There will be many of these!  But how?-------------- */}
            </section>
            <section className="detailDirectionBox">
                <h2>Directions</h2>
                <p>{recipe.directions}</p>
            </section>
        </section>
    )
}