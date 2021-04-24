import React from "react";
import editIcon from "../../images/editIcon.png";
import deleteIcon from "../../images/deleteIcon.png";

export const RecipeCard = ({ recipe }) => (
        <section className="">
                <h3>{recipe.title}</h3>
                <p>{recipe.blurb}</p>
                <img    className=""
                        src={editIcon}
                        onClick={console.log("edit")}></img>
                <img    className=""
                        src={deleteIcon}
                        onClick={console.log("edit")}></img>
        </section>
)