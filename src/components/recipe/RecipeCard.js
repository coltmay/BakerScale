import React from "react";
import { Link } from 'react-router-dom'
import { getCurrentUser } from "../../components/helper/helperFunctions"
import editIcon from "../../images/editIcon.png";
import deleteIcon from "../../images/deleteIcon.png";

export const RecipeCard = ({ recipe }) => {

        return (
                <section className="">
                        <h3>{recipe.title}</h3>
                        <p>{recipe.blurb}</p>
                        <Link to={`/recipes/${recipe.id}/edit`}>
                                <img className=""
                                        src={editIcon}/>
                        </Link>
                        <img className=""
                                src={deleteIcon}
                                onClick={null} />
                </section>
        )
}