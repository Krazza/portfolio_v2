import React from "react";
import "../styles/Home.css";
import { greetPic } from "../util/Content";
import HorizontalSection from "./HorizontalSection";
import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import BackToTopButton from "./ToTopButton";
import { useMediaQuery } from 'react-responsive';
import MobilePortfolio from "./MobilePortfolio";
import { WebProjects, MobileViewGameProjects } from "../util/Content";
import "../styles/MobileProjects.css";

function Home () {

    const isMobile = useMediaQuery({query: '(min-width: 350px) and (max-width: 1279px)'})

    return(
    <div className="homeContainer">
        <Greetings/>
        <Skills/>
        {
            isMobile ? <div className="MPContainer">
                <MobilePortfolio name="Web Portfolio" projects={WebProjects}/>
                <MobilePortfolio name="Game Portfolio" projects={MobileViewGameProjects}/>
            </div> : <HorizontalSection/>
        }
        <About/>
        <BackToTopButton/>
    </div>
    )
}

function Greetings() {

    function OpenMail()
    {
        window.location.href = "mailto:muondove@gmail.com?subject=Intern/Junior%20position&body=Hello_World;";
    }


    return(
    <div className="heroContainer" id="home">
        <Header/>
        <div className="greetings">
            <div className="deets">
                <section className="title">
                    <h3>{"Hey, I am"}</h3>
                    <h1>{"Vladislav Emerson Muondo 👋"}</h1>
                </section>
                <div className="textBorder"/>
                <p>{"A software developer based in Helsinki, Finland. Passionate about solving problems and creating useful apps. I am also a bedroom guitarist, sci-fi & fantasy reader and a video games fan."}</p>
                <section className="buttons">
                    <button className="myButton" onClick={OpenMail}>{"CONTACT ME"}</button>
                    <a href="https://docs.google.com/document/d/1ytQBhYQuQYSdYEquLYx8n8dqUQ93UmT7iCycKPhhpIY/edit?usp=sharing" rel="noopener noreferrer" target="_blank"><button className="myButton">{"VIEW CV"}</button></a>
                </section>
            </div>
            <img alt={greetPic.alt} src={greetPic.pic}/>
        </div>
        {/* <h2 className="tie">{"⬇️ CHECK OUT MY PROJECTS ⬇️"}</h2> */}
    </div>
    )
}

export default Home;