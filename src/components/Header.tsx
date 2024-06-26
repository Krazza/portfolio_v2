import React from "react";
import "../styles/Header.css";

function Header () {
    return(
        <header className="myHeader">
            <ul className="horizontalMenu">
                <li><a href="#skexp">{"Skills & Experience"}</a></li>
                <li><a href="#projects">{"Portfolios"}</a></li>
                <li><a href="#about">{"About"}</a></li>
                <li><a href="#about">{"Blog (WIP)"}</a></li>
            </ul>
        </header>
    )
}

export default Header;