import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header () {
    return(
        <header>
            <ul className="horizontalMenu">
                <li><Link to="/">{"Web"}</Link></li>
                <li><Link to="/">{"Home"}</Link></li>
                <li><Link to="/">{"Game"}</Link></li>
            </ul>
        </header>
    )
}

export default Header;