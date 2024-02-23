import React from "react";
import "../styles/Portfolio.css";
import Project from "./Project";

function Portfolio() {
    return(
        <div className="portfolioContainer">
            <div className="headingWrap">
                <h2>{"X portfolio"}</h2>
            <div className="headingUnderline"/>
            </div>
            <div className="showcase">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default Portfolio;