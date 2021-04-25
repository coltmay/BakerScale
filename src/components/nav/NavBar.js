import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import searchIcon from '../../images/searchIcon.png'
import './NavBar.css'

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
        <nav>
            <ul className="">
                <li className="">
                    <Link className="tab logo" to="/">L O G O</Link>
                </li>
                <li className="">
                    <Link className="tab selector" to="/recipes">R E C I P E S</Link>
                </li>
                <li className="">
                    <Link className="tab selector" to="/conversions">C O N V E R S I O N S</Link>
                </li>
                <li className="">
                    <Link className="tab selector" to="/about">A B O U T</Link>
                </li>
                {/* <img src={searchIcon}></img> */}
                <li className="searchBin selector">
                    <input  className="tab search selector"
                            onChange={searchText}
                            onKeyPress={keyPress}
                            />
                </li>
                <li className="">
                    <Link className="tab login" to="/login">L O G I N</Link>
                </li>
            </ul>
        </nav>
    )
}