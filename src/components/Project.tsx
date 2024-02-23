import React from "react";
import "../styles/Portfolio.css";
import { teamBuildPic } from "../util/Content";

//props:: img, alt, projectName, live?, youtube?, github?
function Project() {
    return(
        <div className="project">
            <img className="projectscr" alt="teehee" src={teamBuildPic.pic}/>
            <section className="projectDetails">
                <h3>{"X project"}</h3>
                <p>{"GitHub"}</p>
                <p>{"Live link"}</p>
                <p>{"Youtube"}</p>
            </section>
        </div>
    )
}

export default Project;