import React from "react";
import { Link } from 'react-router-dom'
import editIcon from "../../images/editIcon.png";
import deleteIcon from "../../images/deleteIcon.png";

export const RecipeCard = ({ recipe, deleteAndSetRecipes }) => {
        return (
                <section className="">
                        <Link to={`/recipes/${recipe.id}`}>
                        <h3 className="">{recipe.title}</h3>
                        </Link>
                        <p className="">{recipe.blurb}</p>
                        <Link to={`/recipes/${recipe.id}/edit`}>
                                <img className=""
                                        src={editIcon} />
                        </Link>
                        <a href=''>
                                <img className=""
                                        src={deleteIcon}
                                        onClick={(() => deleteAndSetRecipes(recipe.id))} />
                        </a>
                </section>
        )
}