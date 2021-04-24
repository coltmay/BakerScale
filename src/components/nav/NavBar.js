import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const NavBar = () => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);
    let history = useHistory();

    const searchText = (event) => {
        setSearch(event.target.value)
    }

    const keyPress = (event) => {
        if (event.key === 'Enter') {
            window.sessionStorage.setItem('search', search)
            history.push("/search")
            event.target.value = "";
            setSearch(event.target.value)
        }
    }

    return (
        <nav className="">
            <ul className="">
                <li className="">
                    <Link className="" to="/">L O G O</Link>
                </li>
                <li className="">
                    <Link className="" to="/recipes">R E C I P E S</Link>
                </li>
                <li className="">
                    <Link className="" to="/conversions">C O N V E R S I O N S</Link>
                </li>
                <li className="">
                    <Link className="" to="/about">A B O U T</Link>
                </li>
                <li className="">
                    <input  className=""
                            onChange={searchText}
                            onKeyPress={keyPress}
                            />
                </li>
                <li className="">
                    <Link className="" to="/login">L O G I N</Link>
                </li>
            </ul>
        </nav>
    )
}