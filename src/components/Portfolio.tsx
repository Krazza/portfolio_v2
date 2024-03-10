import React, { useState } from "react";
import "../styles/Portfolio.css";
import Project from "./Project";
import { PortfolioProps } from "./HorizontalSection";
import { testProject, testProjectArray } from "../util/Content";

function Portfolio( { name } : PortfolioProps) {
    const [projectContainer, setProjectContainer] = useState([testProjectArray]);
    
    return(
        <div className="portfolioContainer">
            <div className="headingWrap">
                <h2>{name}</h2>
            <div className="headingUnderline"/>
            </div>
            <div className="showcase">
                {
                    testProjectArray.map( (project, index) => <Project key={index} projectName={project.projectName} img={project.img} alt={project.alt} live={project.live} github={project.github} youtube={project.youtube}/>)
                }
            </div>
        </div>
    )
}

export default Portfolio;