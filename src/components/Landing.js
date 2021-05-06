// A module that will display the home page, just a few simple text fields and a button.
import React from "react";
import { Link } from "react-router-dom"
import './Landing.css'

export const LandingPage = () => (
    <section className="landingPage">
        <div className="landingOverlay" />
        <section className="hook">
            <div className="titleGroup">
                <h1 className="hookHeader"
                >Recipes that won't <br></br> you down.</h1>
                <h1 className="hookHeaderEm">weigh</h1>
            </div>
            <h2 className="hookTag"
            >Swiftness.  Precision.  Confidence.<br></br>Discover a better way to bake.</h2>
            <Link to="/register">
                <button className="joinButton"
                >Join</button>
            </Link>
        </section>
    </section>
)