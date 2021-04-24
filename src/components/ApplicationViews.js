import React from "react";
import { Route } from "react-router-dom";
import { LandingPage } from "../components/Landing";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { RecipeList } from "./recipe/RecipeList";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <LandingPage/>
            </Route>

            <Route exact path="/recipes">
                <RecipeList/>
            </Route>

            <Route path="/login">
                <Login/>
            </Route>

            <Route path="/register">
                <Register/>
            </Route>
        </>
    )
}