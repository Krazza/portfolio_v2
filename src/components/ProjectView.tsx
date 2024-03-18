import React from "react";

function ProjectView () {
    return (
        <div className="projectWrap">
            <div className="leftWrap">
                <div className="imgContainer">

                </div> 
            </div>
            
            <div className="detailsContainer">
                <h2>{"Title"}</h2>
                <div className="tags"></div>
                <div className="projectDescription">
                    <h3>{"project name"}</h3>
                    <p>{"yapping time"}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectView;