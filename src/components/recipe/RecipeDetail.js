import React, { useState, useEffect } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom'
import { deleteRecipe, getRecipeById } from '../../modules/RecipeManager'
import editIcon from '../../images/editIcon.png';
import deleteIcon from '../../images/deleteIcon.png';

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
        <>
            <section>
                <h1>{recipe.title}</h1>
                <p>TEMP---------</p>
                <p>By {recipe.user?.name}</p>
                <Link to={`/recipes/${recipe.id}/edit`}>
                    <img className=""
                        src={editIcon} />
                </Link>
                <a href=''>
                    <img className=""
                        src={deleteIcon}
                        onClick={handleDelete} />
                </a>
                <p>{recipe.blurb}</p>
            </section>
            <section>
                <div>
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
            <section>
                <h2>Directions</h2>
                <p>{recipe.directions}</p>
            </section>
        </>
    )
}