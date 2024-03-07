import React from "react";
import "../styles/Home.css";
import { greetPic } from "../util/Content";
import HorizontalSection from "./HorizontalSection";
import About from "./About";

function Home () {

    return(
    <div className="homeContainer">
        <Greetings/>
        <HorizontalSection/>
        <About/>
    </div>
    )
}

function Greetings() {
    return(
    <div className="heroContainer">
        <div className="greetings">
            <div className="deets">
                <section className="title">
                    <h3>{"Hey, I am"}</h3>
                    <h1>{"Vladislav Emerson Muondo 👋"}</h1>
                </section>
                <div className="textBorder"/>
                <p>{"A software developer based in Helsinki, Finland. Passionate about solving problems and creating useful apps. I am also a bedroom guitarist, sci-fi & fantasy reader and a video games fan."}</p>
                <section className="buttons">
                    <button className="contactButton">{"CONTACT ME"}</button>
                    <button className="cvButton">{"VIEW CV"}</button>
                </section>
            </div>
            <img alt={greetPic.alt} src={greetPic.pic}/>
        </div>
        <h2 className="tie">{"⬇️ CHECK OUT MY PROJECTS ⬇️"}</h2>
    </div>
    )
}

export default Home;