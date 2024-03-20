import React, { useState } from "react";
import "../styles/Portfolio.css";
import Project from "./Project";
import { PortfolioProps } from "./HorizontalSection";

function Portfolio( { name, projects } : PortfolioProps) {
    
    return(
        <div className="portfolioContainer">
            <div className="headingWrap">
                <h2>{name}</h2>
            <div className="headingUnderline"/>
            </div>
            <div className="showcase">
                {
                    projects.map( (project, index) => <Project key={index} projectName={project.projectName} img={project.img} alt={project.alt} live={project.live} github={project.github} youtube={project.youtube} detailedViewLink={project.detailedViewLink}/>)
                }
            </div>
        </div>
    )
}

export default Portfolio;