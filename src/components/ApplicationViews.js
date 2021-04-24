import React from "react";
import { Route } from "react-router-dom";
import { LandingPage } from "../components/Landing";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeForm } from "./recipe/RecipeForm";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";
import { ConversionList } from "./conversion/ConversionList";
import { SearchList } from "./search/SearchList";
import { RecipeDetail } from "./recipe/RecipeDetail";
import { RecipeEdit } from "./recipe/RecipeEdit";

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <LandingPage/>
            </Route>

            <Route exact path="/recipes">
                <RecipeList/>
            </Route>

            <Route exact path="/recipes/:recipeId(\d+)">
                <RecipeDetail/>
            </Route>

            <Route path="/recipes/add">
                <RecipeForm/>
            </Route>

            <Route path="/recipes/:recipeId(\d+)/edit">
                <RecipeEdit/>
            </Route>

            <Route path="/conversions">
                <ConversionList/>
            </Route>

            <Route path="/search">
                <SearchList/>
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