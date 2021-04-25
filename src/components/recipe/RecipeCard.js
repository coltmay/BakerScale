import React from "react";
import { Link } from 'react-router-dom'
import editIcon from "../../images/editIcon.png";
import deleteIcon from "../../images/deleteIcon.png";
import './RecipeList.css'

export const RecipeCard = ({ recipe, deleteAndSetRecipes }) => {
        return (
                <section className="recipeCard">
                        <Link to={`/recipes/${recipe.id}`}>
                                <h3 className="recipeTitle">{recipe.title}</h3>
                        </Link>
                        <p className="recipeBlurb">{recipe.blurb}</p>
                        <div className="buttonBox">
                                <Link to={`/recipes/${recipe.id}/edit`}>
                                        <img className="editIcon"
                                                src={editIcon} />
                                </Link>
                                <a href=''>
                                        <img className="deleteIcon"
                                                src={deleteIcon}
                                                onClick={(() => deleteAndSetRecipes(recipe.id))} />
                                </a>
                        </div>
                </section>
        )
}