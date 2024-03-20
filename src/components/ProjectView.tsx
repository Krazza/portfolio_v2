import React from "react";
import "../styles/ProjectView.css";

export type ProjectImage = {
    image : string,
    alt : string
}

export type ProjectViewProps = {
    images : Array<ProjectImage>,
    description : string,
    projectName : string,
    tags : Array<string>
}

function ProjectView ({images, description, projectName, tags} : ProjectViewProps) {
    return (
        <div className="projectWrap">
            <div className="imgContainer">
                {
                    images.map((image, index) => <img alt={image.alt} src={image.image}/>)
                } 
            </div> 

            
            <div className="detailsContainer">
                <h2>{projectName}</h2>
                <div className="tags">
                    {
                        tags.map((tag, index) => <div key={index} className="tag">{tag}</div>)
                    }
                </div>
                <div className="projectDescription">
                    <h3>{"Description"}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectView;