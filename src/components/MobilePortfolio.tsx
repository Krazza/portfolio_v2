import React from "react";
import { PortfolioProps } from "./HorizontalSection";
import MobileProject from "./MobileProject";
import "../styles/MobileProjects.css";

function MobilePortfolio ( { name, projects } : PortfolioProps) { 
    return (
        <div className="mobilePortfolio">
            <div className="mobileHeadingWrap">
                <h2>{name}</h2>
            <div className="mobileHeadingUnderline"/>
            </div>
            {
                projects.map((project, index) => <MobileProject key={index} projectName={project.projectName} img={project.img} alt={project.alt} live={project.live} github={project.github} youtube={project.youtube} detailedViewLink={project.detailedViewLink}/>)
            }
        </div>
    )
}

export default MobilePortfolio;