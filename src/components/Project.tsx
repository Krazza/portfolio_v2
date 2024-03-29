import React from "react";
import "../styles/Portfolio.css";
import { ProjectProps } from "./HorizontalSection";
import { Link } from "react-router-dom";

function Project( {img, alt, projectName, youtube, live, github, detailedViewLink }: ProjectProps) {

    const colors: string[] = ['#C93910', '#31A8D2'];//#ED7E41

    const getRandomIndex = (): number => {
        return Math.floor(Math.random() * colors.length);
    };

    const handleHover : React.MouseEventHandler<HTMLDivElement>  = (event) => {
        const target = event.currentTarget;
        target.style.boxShadow = `10px 10px 0px 4px ${colors[getRandomIndex()]}`;
        target.style.transform = 'translateY(-10px)';
      };
    
      const handleLeave : React.MouseEventHandler<HTMLDivElement> = (event) => {
        const target = event.currentTarget;
        target.style.boxShadow = 'none';
        target.style.transform = 'none';
    };
    
    return(
            <div className="project" >
                {
                    detailedViewLink !== "" ?
                    <Link to={detailedViewLink} target="_blank" rel="noopener noreferrer">
                        <img className="projectscr" alt={alt} src={img} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>
                    </Link> 
                    :
                    <img className="projectscr" alt={alt} src={img} onMouseEnter={handleHover} onMouseLeave={handleLeave}/>
                }
                <div className="projectBorder"/>
                <section className="projectDetails">
                    <h3>{projectName}</h3>
                    { youtube ? <a href={youtube} rel="noopener noreferrer" target="_blank">{"Youtube"}</a> : <></>}
                    { github ? <a href={github} rel="noopener noreferrer" target="_blank">{"GitHub"}</a> : <></>}
                    { live ? <a href={live} rel="noopener noreferrer" target="_blank">{"Live"}</a> : <></>}
                </section>
            </div>
    )
}

export default Project;