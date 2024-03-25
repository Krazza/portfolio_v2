import React from "react";
import "../styles/ProjectView.css";
import { Link } from "react-router-dom";

export type ProjectImage = {
    image : string,
    alt : string
}

export type ProjectViewProps = {
    images : Array<ProjectImage>,
    description : string,
    projectName : string,
    tags : Array<string>,
    theme : string,
    github? : string,
    live? : string,
    youtube? : string
}

function ProjectView ({images, description, projectName, tags, theme, github, live, youtube} : ProjectViewProps) {
    return (
        <div className={`projectWrap ${theme}`}>
            <div className="imgContainer">
                {
                    images.map((image, index) => <img alt={image.alt} src={image.image}/>)
                } 
            </div> 
            <div className="detailsContainer">
                <h2>{projectName}</h2>
                <ul className="tags">
                    {
                        tags.map((tag, index) => <li key={index} className="tag">{tag}</li>)
                    }
                </ul>
                <div className="projectDescription">
                    <p>{description}</p>
                </div>
                <section className="linkSection">
                { github ? <a href={github} rel="noopener noreferrer" target="_blank">{"GitHub"}</a> : <></> }
                { live ? <a href={live} rel="noopener noreferrer" target="_blank">{"Live link"}</a> : <></> }
                { youtube ? <a href={youtube} rel="noopener noreferrer" target="_blank">{"Youtube"}</a> : <></> }
                </section>
            </div>
        </div>
    )
}

export default ProjectView;