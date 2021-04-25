// A module that will display the home page, just a few simple text fields and a button.
import React from "react";
import { Link } from "react-router-dom"

export const LandingPage = () => (
    <>
        <h1 className=""
        >Recipes that won't <br></br> you down.</h1>
        <h1>weigh</h1>
        <h2 className=""
        >Swiftness.  Precision.  Confidence.<br></br>Discover a better way to bake.</h2>
        <Link to="/register">
            <button className=""
            >Join</button>
        </Link>
    </>
)