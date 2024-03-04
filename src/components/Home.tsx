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
    <div className="greetings">
        <div className="textbox">
            <section><h1>{"Vladislav Emerson Muondo"}</h1>
            <h2>{"Software Developer based in Helsinki, Finland"}</h2></section>
            
            <img alt={greetPic.alt} src={greetPic.pic}/>
        </div>
        <div className="border"/>
        <div className="menu">
            <h2>
                {"Game Portfolio"}
            </h2>
            <h2>
                {"Web Portfolio"}
            </h2>
            <h2>
                {"Details"}
            </h2>
        </div>
    </div>
    )
}

export default Home;