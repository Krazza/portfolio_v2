import React from "react";
import { Link } from "react-router-dom";
import { ProjectProps } from "./HorizontalSection";
import "../styles/MobileProjects.css";

function MobileProject ( {img, alt, projectName, youtube, live, github, detailedViewLink }: ProjectProps) {
    return(
        <div className="mobileProject" >
            <h3>{projectName}</h3>
        {
            detailedViewLink !== "" ?
            <Link to={detailedViewLink} target="_blank" rel="noopener noreferrer">
                <img className="mobileImg" alt={alt} src={img}/>
            </Link> 
            :
            <img className="mobileImg" alt={alt} src={img}/>
        }
        <section className="mobileDetails">
            { youtube ? <a href={youtube} rel="noopener noreferrer" target="_blank">{"Youtube"}</a> : <></>}
            { github ? <a href={github} rel="noopener noreferrer" target="_blank">{"GitHub"}</a> : <></>}
            { live ? <a href={live} rel="noopener noreferrer" target="_blank">{"Live link"}</a> : <></>}
        </section>
    </div>
    )
}

export default MobileProject;