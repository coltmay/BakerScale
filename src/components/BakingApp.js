import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { getCurrentUser } from "./helper/helperFunctions"
import { NavBar } from "./nav/NavBar"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"

export const BakingApp = () => {
    const [currentUser, setCurrentUser] = useState(getCurrentUser())

    return (
        <>
            <NavBar 
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}/>
            <ApplicationViews
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}/>
        </>
    )
}
