import React from "react"
import { Link } from "react-router-dom"

export const NavBar = () => {
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
                    <input className=""/>
                </li>
                <li className="">
                    <Link className="" to="/login">L O G I N</Link>
                </li>
            </ul>
        </nav>
    )
}