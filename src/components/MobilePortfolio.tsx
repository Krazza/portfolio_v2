import React from "react";
import { PortfolioProps } from "./HorizontalSection";

function MobilePortfolio ( { name, projects } : PortfolioProps) { 
    return (
        <div className="mobileProjects">
            {
                projects.map((project, index) => <div>{"mobile project will be here"}</div>)
            }
        </div>
    )
}

export default MobilePortfolio;